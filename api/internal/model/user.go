package model

// User store field of User
type User struct {
	ID               string `json:"id"`
	Email            string `json:"email"`
	Password         string `json:"password"`
	Role             string `json:"role"`
	IsVerified       bool   `json:"is_verified"`
	VerificationCode string `json:"verification_code"`
	IdentityImage    string `json:"identity_image"`
}

// InputLogin store value of input login
type InputLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// InputRegister store value of input login
type InputRegister struct {
	Email       string `json:"email"`
	Password    string `json:"password"`
	Name        string `json:"name"`
	PhoneNumber string `json:"phone_number"`
}

// InputVerification store value of input verification
type InputVerification struct {
	Email            string `json:"email"`
	VerificationCode string `json:"code"`
}
