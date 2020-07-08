import Axios from "./axios";

export const fetchOffices = async (token) => {
	const response = await Axios.get("/offices/", {
		headers: { "x-auth-token": token },
	});
	return response.data.data;
};

export const addOffice = async (data, token) => {
	const response = await Axios.post("/offices/", data, {
		headers: {
			"x-auth-token": token,
		},
	});
	return response.data;
};
