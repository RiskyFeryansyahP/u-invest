package repository

import (
	"context"

	"github.com/RiskyFeryansyahP/u-invest/config"
	"github.com/RiskyFeryansyahP/u-invest/internal/model"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication"
)

// AuthenticationRepository hold field of hasura configuration
type AuthenticationRepository struct {
	Hasura *config.Hasura
}

// NewAuthenticationRepository new initialization repository authentication
// and implementing interface repository authentication
func NewAuthenticationRepository(cfg *config.MapConfig) authentication.RepositoryAuthentication {
	return &AuthenticationRepository{
		Hasura: cfg.Hasura,
	}
}

// FetchByEmail fetch user by email and return user that match
func (a *AuthenticationRepository) FetchByEmail(ctx context.Context, input model.InputLogin) {
	panic("implement fetch by email")
}

// Create is create new user / registering new user
func (a *AuthenticationRepository) Create(ctx context.Context, input model.InputRegister) {
	panic("implement Create")
}
