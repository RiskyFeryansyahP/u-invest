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

// FetchUserByEmail ...
const FetchUserByEmail = `
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

// FetchDetailUser ...
const FetchDetailUser = `
	query FetchDetailUser($id: uuid!) {
		users(where: {id: {_eq: $id}}) {
			id
			email
			identity_image
			is_verified
			role
			password
			verification_code
			profile {
				id
				name
				phone_number
				birth_date
				birth_place
				address
			}
		}
	}  
`
