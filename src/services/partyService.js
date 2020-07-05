import Axios from "./axios";

const fetchParties = async (token) => {
	const response = await Axios.get("/parties/", {
		headers: {
			"x-auth-token": token,
		},
	});
	return response.data.data;
};

export default fetchParties;
