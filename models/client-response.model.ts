import { CONTENT_TYPES } from ".";


export class ClientResponse<T> {
  statusCode: number;
  success: boolean;
  data: Promise<T>;

  constructor(response: Response, contentType: CONTENT_TYPES = CONTENT_TYPES.TEXT) {
    this.statusCode = response.status;
    this.success = response.ok;
    this.data = contentType === CONTENT_TYPES.JSON ? response.json() : response.text();
  }
}
