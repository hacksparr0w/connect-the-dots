import HttpMethod from "./HttpMethod";
import httpRequest from "./httpRequest";

const httpPost = (client, url, params, data) => (
  httpRequest(client, HttpMethod.POST, url, params, data)
);

export default httpPost;
