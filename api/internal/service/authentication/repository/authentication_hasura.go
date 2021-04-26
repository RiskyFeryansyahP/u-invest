package repository

import (
	"context"
	"fmt"
	"log"
	"net/smtp"
	"strconv"

	"github.com/RiskyFeryansyahP/u-invest/config"
	"github.com/RiskyFeryansyahP/u-invest/internal/graphql/mutation"
	"github.com/RiskyFeryansyahP/u-invest/internal/graphql/query"
	"github.com/RiskyFeryansyahP/u-invest/internal/model"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication"
	"github.com/machinebox/graphql"
)

// AuthenticationRepository hold field of hasura configuration
type AuthenticationRepository struct {
	Hasura *config.Hasura
	SMTP   *config.SMTP
	Client *graphql.Client
}

// NewAuthenticationRepository new initialization repository authentication
// and implementing interface repository authentication
func NewAuthenticationRepository(cfg *config.MapConfig, client *graphql.Client) authentication.RepositoryAuthentication {
	return &AuthenticationRepository{
		Hasura: cfg.Hasura,
		SMTP:   cfg.SMTP,
		Client: client,
	}
}

// FetchByEmail fetch user by email and return user that match
func (a *AuthenticationRepository) FetchByEmail(ctx context.Context, input model.InputLogin) (*model.ResponseUsers, error) {
	var resp *model.ResponseUsers

	req := graphql.NewRequest(query.FetchUserByEmail)
	req.Var("email", input.Email)
	req.Header.Set("x-hasura-admin-secret", a.Hasura.AdminSecret)

	if err := a.Client.Run(ctx, req, &resp); err != nil {
		log.Printf("failed run query: %+v \n", err)

		return nil, err
	}

	return resp, nil
}

// Create is create new user / registering new user
func (a *AuthenticationRepository) Create(ctx context.Context, input model.InputRegister, code int) error {
	var resp interface{}

	req := graphql.NewRequest(mutation.CreateNewUser)
	req.Var("email", input.Email)
	req.Var("password", input.Password)
	req.Var("name", input.Name)
	req.Var("code", strconv.Itoa(code))
	req.Var("phone_number", input.PhoneNumber)
	req.Header.Set("x-hasura-admin-secret", a.Hasura.AdminSecret)

	if err := a.Client.Run(ctx, req, &resp); err != nil {
		log.Printf("failed run mutation: %+v \n", err)

		return err
	}

	return nil
}

// UpdateStatusVerified update status verified to `true`
func (a *AuthenticationRepository) UpdateStatusVerified(ctx context.Context, input model.InputVerification) error {
	var resp model.ResponseUserValidation

	req := graphql.NewRequest(mutation.UpdateStatusVerifiedUser)
	req.Var("email", input.Email)
	req.Var("code", input.VerificationCode)
	req.Header.Set("x-hasura-admin-secret", a.Hasura.AdminSecret)

	if err := a.Client.Run(ctx, req, &resp); err != nil {
		log.Printf("failed run mutation: %+v \n", err)

		return err
	}

	if resp.UpdateUser.AffectedRows == 0 {
		return fmt.Errorf("failed validation user, please check your code validation")
	}

	return nil
}

// SendVerificationCode ...
func (a *AuthenticationRepository) SendVerificationCode(ctx context.Context, email string, code int) error {
	c := strconv.Itoa(code)

	msg := []byte("To: " + email + "\r\n" +
		"Subject: Pendaftaran akun U-Invest\r\n" +
		"\r\n" +
		"Halo U-Investers, Kode verifikasi untuk akun U-Invest Anda adalah" + c + "\r\n")

	err := smtp.SendMail(
		"smtp.gmail.com:587",
		smtp.PlainAuth("", a.SMTP.From, a.SMTP.Password, "smtp.gmail.com"),
		a.SMTP.From,
		[]string{email},
		[]byte(msg),
	)

	return err
}
