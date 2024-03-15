const crypto = require('crypto');

// Generate a random string of specified length
function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') // Convert to hexadecimal format
    .slice(0, length); // Trim to desired length
}

// Usage example
const randomString = generateRandomString(32); // Generate a random string of length 32
console.log(randomString);
