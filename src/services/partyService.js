import Axios from "./axios";

export const fetchParties = async (token) => {
	const response = await Axios.get("/parties/", {
		headers: {
			"x-auth-token": token,
		},
	});
	return response.data.data;
};

export const addParty = async (data, token) => {
	const response = await Axios.post("/parties/", data, {
		headers: {
			"x-auth-token": token,
		},
	});
	return response.data;
};
