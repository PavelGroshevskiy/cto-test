import { createFetch, timeoutFetch } from "../utils/fetchUtils.js";
import * as urls from "../constants/nodeApi.js";

export const nodeApi = {
	getMain: timeoutFetch(urls.MAIN_URL),
};
