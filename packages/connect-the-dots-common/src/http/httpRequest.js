const httpRequest = (client, method, url, params, data) => (
  client.request({ method, url, params, data })
);

export default httpRequest;
