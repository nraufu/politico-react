import Axios from "./axios";
import jwtDecode from "jwt-decode";

export const registerUser = async (newUserData) => {
	const response = await Axios.post("/auth/signup", newUserData);
	return response.data.data[0];
};

export const login = async (userData) => {
	const response = await Axios.post("/auth/login", userData);
	return response.data.data[0];
};

export const getCurrentUser = () => {
	try {
		const token = localStorage.getItem("Token");
		return jwtDecode(token);
	} catch (err) {
		return null;
	}
};

export const logout = () => {
	localStorage.removeItem("Token");
};
