import HttpMethod from "./HttpMethod";
import httpRequest from "./httpRequest";

const httpGet = (client, url, params) => (
  httpRequest(client, HttpMethod.GET, url, params)
);

export default httpGet;
