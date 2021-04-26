package config

import (
	"os"
)

// MapConfig stores all configuration-related values
type MapConfig struct {
	Hasura *Hasura
	SMTP   *SMTP
}

// Hasura stores all hasura environment values
type Hasura struct {
	Endpoint    string
	AdminSecret string
}

// SMTP stores all SMTP environment values
type SMTP struct {
	From     string
	Password string
	Port     string
}

// NewMapConfig do a new initialization to the config map
func NewMapConfig() *MapConfig {
	endpoint := os.Getenv("HASURA_ENDPOINT")
	adminSecret := os.Getenv("HASURA_ADMIN_SECRET")

	hasura := &Hasura{
		Endpoint:    endpoint,
		AdminSecret: adminSecret,
	}

	smtp := &SMTP{
		From:     os.Getenv("GMAIL_ACCOUNT"),
		Password: os.Getenv("GMAIL_PASSWORD"),
		Port:     os.Getenv("GMAIL_SMTP_PORT"),
	}

	return &MapConfig{
		Hasura: hasura,
		SMTP:   smtp,
	}
}
