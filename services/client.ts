import { ClientResponse } from "../models";

const get = <T>({ url, contentType }): Promise<ClientResponse<T>> => {
  return fetch(url).then(
    response => new ClientResponse<T>(response, contentType)
  );
};

const Client = {
  get
};

export default Client;
