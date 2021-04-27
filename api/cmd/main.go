package main

import (
	"fmt"
	"log"
	"os"

	"github.com/RiskyFeryansyahP/u-invest/config"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication/handler"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication/repository"
	"github.com/RiskyFeryansyahP/u-invest/internal/service/authentication/usecase"
	"github.com/fasthttp/router"
	_ "github.com/joho/godotenv/autoload" // autoload env
	"github.com/machinebox/graphql"
	"github.com/valyala/fasthttp"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	port = fmt.Sprintf(":%s", port)

	cfg := config.NewMapConfig()

	r := router.New()
	rg := r.Group("/api/v1")

	client := graphql.NewClient(cfg.Hasura.Endpoint)

	repo := repository.NewAuthenticationRepository(cfg, client)
	uc := usecase.NewAuthenticationUsecase(repo)
	handler.NewAuthenticationHandler(rg, uc)

	log.Printf("API Server running at %s \n", port)

	log.Fatal(fasthttp.ListenAndServe(port, r.Handler))
}
