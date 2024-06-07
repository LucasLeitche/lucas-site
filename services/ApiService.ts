import { IAPiService } from "./IApiService";

class ApiService implements IAPiService {
  private _http: any;
  constructor() {
    this._http = fetch;
  }
  list = (path: string): Promise<Response> =>{
    return this._http(path);
  }
}

export const apiService = new ApiService();