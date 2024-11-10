import axios from "axios";
import https from "https";

const agent = new https.Agent({
	rejectUnauthorized : false
})

const instance = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}`,
	httpsAgent : agent,
});

export default instance;
