package query

// FetchUserByEmail ...
// type FetchUserByEmail struct {
// 	Users struct {
// 		ID               graphql.ID
// 		Email            graphql.String
// 		Password         graphql.String
// 		Role             graphql.String
// 		IsVerified       graphql.Boolean
// 		VerificationCode graphql.String
// 		IdentityImage    graphql.String
// 	} `graphql:"users(where: {email: {_eq: $email}})"`
// }

const (
	// FetchUserByEmail ...
	FetchUserByEmail = `
	query FetchUserByEmail($email: String!) {
		users(where: {email: {_eq: $email}}) {
		  id
		  email
		  password
		  role
		  is_verified
		  verification_code
		  identity_image
		}
	}	  
	`
)
