package model

// ResponseUsers store field for response user
type ResponseUsers struct {
	Users []User `json:"users"`
}

// ResponseUserValidation store field for response user validation
type ResponseUserValidation struct {
	UpdateUser struct {
		AffectedRows int `json:"affected_rows"`
	} `json:"update_users"`
}
