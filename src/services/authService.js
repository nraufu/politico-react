export const users = [{
	names: "userOne",
	nationalId: "1234567890",
	email: "user@email.com",
	password: "12345",
}];

export const registerUser = (newUser) => {
	for (const user in users) {
		if (users[user].email !== newUser.email)
			users.push(newUser);
	}
}
