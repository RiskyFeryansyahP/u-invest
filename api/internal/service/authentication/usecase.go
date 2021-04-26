package authentication

import (
	"context"

	"github.com/RiskyFeryansyahP/u-invest/internal/model"
)

// UsecaseAuthentication is the interface that wraps method for authentication usecase.
type UsecaseAuthentication interface {
	CreateUser(ctx context.Context, input model.InputRegister)
	LoginValidation(ctx context.Context, input model.InputLogin)
	sendVerificationCode(ctx context.Context, email string)
}
