import Axios from "./axios";

const fetchOffices = async (token) => {
	const response = await Axios.get("/offices/", {
		headers: { "x-auth-token": token },
	});
	return response.data.data;
};

export default fetchOffices;
