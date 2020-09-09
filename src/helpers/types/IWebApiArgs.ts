export interface IWebApiArgs {
  endpoint: string;
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
  query?: object;
}
