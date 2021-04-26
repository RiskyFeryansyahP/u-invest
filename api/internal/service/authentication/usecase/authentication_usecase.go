package usecase

import (
	"context"
	"fmt"

	"github.com/RiskyFeryansyahP/u-invest/internal/model"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication"
	"golang.org/x/crypto/bcrypt"
)

// AuthenticationUsecase ...
type AuthenticationUsecase struct {
	AuthRepo authentication.RepositoryAuthentication
}

// NewAuthenticationUsecase ...
func NewAuthenticationUsecase(repo authentication.RepositoryAuthentication) authentication.UsecaseAuthentication {
	return &AuthenticationUsecase{
		AuthRepo: repo,
	}
}

// CreateUser ...
func (a *AuthenticationUsecase) CreateUser(ctx context.Context, input model.InputRegister) error {
	if input.Email == "" {
		return fmt.Errorf("email should not be empty")
	}

	if input.Name == "" {
		return fmt.Errorf("name should not be empty")
	}

	if input.Password == "" {
		return fmt.Errorf("password should not be empty")
	}

	if input.PhoneNumber == "" {
		return fmt.Errorf("phone number should not be empty")
	}

	// hash password to bcrypt
	hash, err := bcrypt.GenerateFromPassword([]byte(input.Password), 14)
	if err != nil {
		return fmt.Errorf("failed hashing password: %+v", err)
	}

	input.Password = string(hash)

	err = a.AuthRepo.Create(ctx, input)
	if err != nil {
		return err
	}

	err = a.AuthRepo.SendVerificationCode(ctx, input.Email)
	if err != nil {
		return err
	}

	return nil
}

// LoginValidation ...
func (a *AuthenticationUsecase) LoginValidation(ctx context.Context, input model.InputLogin) (*model.ResponseUsers, error) {
	if input.Email == "" {
		return nil, fmt.Errorf("email should not be empty")
	}

	if input.Password == "" {
		return nil, fmt.Errorf("password should not be empty")
	}

	res, err := a.AuthRepo.FetchByEmail(ctx, input)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(res.Users[0].Password), []byte(input.Password))
	if err != nil {
		return nil, err
	}

	return res, nil
}
