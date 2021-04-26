package mutation

const (
	// CreateNewUser ...
	CreateNewUser = `
	mutation CreateNewUser($email: String!, $password: String!, $name: String!, $phone_number: String!) {
		insert_users(objects: {
		  email: $email,
		  password: $password,
		  identity_image: "https://avatar.oxro.io/avatar.svg?name=Guest&length=1",
		  role: "user"
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
