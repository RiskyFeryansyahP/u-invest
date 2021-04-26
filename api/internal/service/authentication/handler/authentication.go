package handler

import (
	"encoding/json"

	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
)

// NewAuthenticationHandler new initilization handler for authentication
func NewAuthenticationHandler(r *router.Group) {
	r.GET("/login", login)
	r.GET("/register", register)
}

func login(ctx *fasthttp.RequestCtx) {
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "Login handler",
	})
}

func register(ctx *fasthttp.RequestCtx) {
	json.NewEncoder(ctx).Encode(map[string]string{
		"message": "Register handler",
	})
}
