package util

import (
	"math/rand"
	"time"
)

// RandomNumber create a random number integer
func RandomNumber() int {
	rand.Seed(time.Now().UnixNano())

	min := 1001
	max := 9999

	return rand.Intn(max-min+1) - min
}
