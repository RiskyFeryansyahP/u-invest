package handler

import (
	"encoding/json"

	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication"
	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
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

	r.GET("/login", handler.login)
	r.GET("/register", handler.register)
}

func (a *AuthenticationHandler) login(ctx *fasthttp.RequestCtx) {
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "Login handler",
	})
}

func (a *AuthenticationHandler) register(ctx *fasthttp.RequestCtx) {
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "Register handler",
	})
}
