import * as queryString from 'query-string';
import { IWebApiArgs } from './types/IWebApiArgs';

function getFetchUrl(args: IWebApiArgs): string {
  return args.endpoint + (args.query ? `?${queryString.stringify(args.query)}` : '');
}

function getFetchArgs(args: IWebApiArgs): RequestInit {
  const headers = {
    'Content-Type': 'application/json'
  };
  let body: string = '';
  if (args.body) {
    if (args.type === 'GET') {
      throw new Error('GET request does not support request body.');
    }
    body = JSON.stringify(args.body);
  }
  return {
    method: args.type,
    headers,
    ...(args.type === 'GET' ? {} : { body })
  };
}

export function callApi<TResponse>(args: IWebApiArgs): Promise<TResponse> {
  return fetch(getFetchUrl(args), getFetchArgs(args))
    .then((response: Response) =>
      response.ok ? response.json() : Promise.reject(Error('Failed to load'))
    )
    .catch(error => {
      throw error;
    });
}
