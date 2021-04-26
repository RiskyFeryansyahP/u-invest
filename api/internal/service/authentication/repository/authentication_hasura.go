package repository

import (
	"context"
	"log"

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
	Client *graphql.Client
}

// NewAuthenticationRepository new initialization repository authentication
// and implementing interface repository authentication
func NewAuthenticationRepository(cfg *config.MapConfig, client *graphql.Client) authentication.RepositoryAuthentication {
	return &AuthenticationRepository{
		Hasura: cfg.Hasura,
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
func (a *AuthenticationRepository) Create(ctx context.Context, input model.InputRegister) error {
	var resp interface{}

	req := graphql.NewRequest(mutation.CreateNewUser)
	req.Var("email", input.Email)
	req.Var("password", input.Password)
	req.Var("name", input.Name)
	req.Var("phone_number", input.PhoneNumber)
	req.Header.Set("x-hasura-admin-secret", a.Hasura.AdminSecret)

	if err := a.Client.Run(ctx, req, &resp); err != nil {
		log.Printf("failed run mutation: %+v \n", err)

		return err
	}

	return nil
}
