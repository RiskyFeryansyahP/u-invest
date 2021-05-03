package authentication

import (
	"context"

	"github.com/RiskyFeryansyahP/u-invest/internal/model"
)

// UsecaseAuthentication is the interface that wraps method for authentication usecase.
type UsecaseAuthentication interface {
	CreateUser(ctx context.Context, input model.InputRegister) error
	LoginValidation(ctx context.Context, input model.InputLogin) (*model.ResponseUsers, error)
	VerificationValidation(ctx context.Context, input model.InputVerification) error
	DetailUser(ctx context.Context, id string) (*model.ResponseUsers, error)
}
