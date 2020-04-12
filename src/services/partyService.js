import fprLogo from '../components/Parties/img/fpr-logo.jpg';
import dgprLogo from '../components/Parties/img/dgpr-logo.jpg';

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
