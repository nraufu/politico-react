import fprLogo from '../assets/images/fpr-logo.jpg';
import dgprLogo from '../assets/images/dgpr-logo.jpg';

const parties = [{
	logo: dgprLogo,
	partyName: "DGPR (Democratic Green Party of Rwanda)",
	hqAddress: "Kigali, Rwanda"
}, {
	logo: fprLogo,
	partyName: "FPR (Rwanda Patriotic Front)",
	hqAddress: "Kigali, Rwanda"
}];

export const getParties = () => {
	return parties;
}
