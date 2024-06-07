export interface IAPiService {
  list(path: string): Promise<Response>;
}