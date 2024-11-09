import axios from "axios";

const instance = axios.create({
	baseURL: `http://${import.meta.env.VITE_SERVER_URL}:4000/api`,
});

export default instance;
