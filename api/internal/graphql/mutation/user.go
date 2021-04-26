package mutation

const (
	// CreateNewUser ...
	CreateNewUser = `
	mutation CreateNewUser($email: String!, $password: String!, $name: String!, $phone_number: String!, $code: String!) {
		insert_users(objects: {
		  email: $email,
		  password: $password,
		  identity_image: "https://avatar.oxro.io/avatar.svg?name=Guest&length=1",
		  role: "user"
		  is_verified: false,
		  verification_code: $code,
		  profile: {
			data: {
			  name: $name,
			  phone_number: $phone_number,
			  birth_place: "",
			  address: ""
			}
		  }
		}) {
		  affected_rows
		}
	}
	`
)
