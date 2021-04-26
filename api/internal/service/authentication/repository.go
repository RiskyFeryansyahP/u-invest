package authentication

import (
	"context"

	"github.com/RiskyFeryansyahP/u-invest/internal/model"
)

// RepositoryAuthentication is the interface that wraps method for authentication repository.
type RepositoryAuthentication interface {
	FetchByEmail(ctx context.Context, input model.InputLogin) (*model.ResponseUsers, error)
	Create(ctx context.Context, input model.InputRegister) error
	SendVerificationCode(ctx context.Context, email string) error
}