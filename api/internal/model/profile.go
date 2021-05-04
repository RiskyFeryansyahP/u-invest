package model

// Profile store field of profile
type Profile struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	PhoneNumber string `json:"phone_number"`
	BirthPlace  string `json:"birth_place"`
	BirthDate   string `json:"birth_date"`
	Address     string `json:"address"`
}
