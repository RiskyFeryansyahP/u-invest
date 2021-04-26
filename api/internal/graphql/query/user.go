package query

import "github.com/hasura/go-graphql-client"

// FetchUserByEmailQuery ...
type FetchUserByEmailQuery struct {
	Users struct {
		ID               graphql.ID
		Email            graphql.String
		Password         graphql.String
		Role             graphql.String
		IsVerified       graphql.Boolean
		VerificationCode graphql.String
		IdentityImage    graphql.String
	} `graphql:"users(where: {email: {_eq: $email}})"`
}
