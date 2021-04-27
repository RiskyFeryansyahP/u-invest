package handler

import (
	"encoding/json"

	"github.com/RiskyFeryansyahP/u-invest/internal/model"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication"
	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
	"golang.org/x/crypto/bcrypt"
)

// AuthenticationHandler ...
type AuthenticationHandler struct {
	AuthUC authentication.UsecaseAuthentication
}

// NewAuthenticationHandler new initilization handler for authentication
func NewAuthenticationHandler(r *router.Group, authUC authentication.UsecaseAuthentication) {
	handler := &AuthenticationHandler{
		AuthUC: authUC,
	}

	r.POST("/auth/login", handler.login)
	r.POST("/auth/register", handler.register)
	r.POST("/auth/verified", handler.verified)
}

func (a *AuthenticationHandler) login(ctx *fasthttp.RequestCtx) {
	var input model.InputLogin

	b := ctx.Request.Body()

	json.Unmarshal(b, &input)

	ctx.Response.Header.Set("Content-Type", "application/json")

	res, err := a.AuthUC.LoginValidation(ctx, input)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		ctx.Response.Header.SetStatusCode(fasthttp.StatusUnauthorized)
		json.NewEncoder(ctx).Encode(map[string]string{
			"message": "your email or password is wrong",
		})
		return
	}

	if err != nil {
		ctx.Response.Header.SetStatusCode(fasthttp.StatusBadRequest)
		json.NewEncoder(ctx).Encode(map[string]string{
			"message": err.Error(),
		})
		return
	}

	if len(res.Users) > 0 {
		json.NewEncoder(ctx).Encode(res.Users[0])
		return
	}

	ctx.Response.Header.SetStatusCode(fasthttp.StatusBadRequest)
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": err.Error(),
	})
}

func (a *AuthenticationHandler) verified(ctx *fasthttp.RequestCtx) {
	var input model.InputVerification

	b := ctx.Request.Body()

	json.Unmarshal(b, &input)

	ctx.Response.Header.Set("Content-Type", "application/json")

	err := a.AuthUC.VerificationValidation(ctx, input)
	if err != nil {
		ctx.Response.Header.SetStatusCode(fasthttp.StatusBadRequest)
		json.NewEncoder(ctx).Encode(map[string]string{
			"message": err.Error(),
		})
		return
	}

	ctx.Response.Header.SetStatusCode(fasthttp.StatusOK)
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "success validation user",
	})
}

func (a *AuthenticationHandler) register(ctx *fasthttp.RequestCtx) {
	var input model.InputRegister

	b := ctx.Request.Body()

	json.Unmarshal(b, &input)

	ctx.Response.Header.Set("Content-Type", "application/json")

	err := a.AuthUC.CreateUser(ctx, input)
	if err != nil {
		ctx.Response.Header.SetStatusCode(fasthttp.StatusBadRequest)
		json.NewEncoder(ctx).Encode(map[string]string{
			"message": err.Error(),
		})
		return
	}

	ctx.Response.Header.SetStatusCode(fasthttp.StatusOK)
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "succeed created a new user",
	})
}
