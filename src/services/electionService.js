import Axios from "./axios";

export const registerCandidate = async (officeId, candidate) => {
	const token = localStorage.getItem("Token");
	const response = await Axios.post(
		`/offices/${officeId}/register`,
		candidate,
		{
			headers: {
				"x-auth-token": token,
			},
		}
	);
	return response.data;
};
