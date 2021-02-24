import axios, { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import { requestTransformer, responseTransformer } from './transformers';
import { Action, ApiResponse, RequestParams } from './baseService.types';

const baseService = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  transformRequest: [requestTransformer],
  transformResponse: [responseTransformer],
});

const session = async () => {
  // add logic to fetch auth tokens, emails, etc. here
  return {};
};

const configureRequest = async ({
  method,
  endpoint,
  params,
}: {
  method: Action;
  endpoint: string;
  params: RequestParams;
}): Promise<AxiosRequestConfig> => {
  const { version, data, urlParams } = params;
  const headers = await session();

  const config: AxiosRequestConfig = {
    url: `${version || 'v1'}/${endpoint}`,
    method,
    data,
    headers,
    params: urlParams,
  };

  return config;
};

async function baseRequest<ReturnType>(method: Action, endpoint: string, params: RequestParams) {
  const config = await configureRequest({ method, endpoint, params });
  return baseService.request<ApiResponse<ReturnType>>(config);
}

export async function fetch<ReturnType>(endpoint: string, params: RequestParams) {
  return baseRequest<ReturnType>('get', endpoint, params);
}

export async function post<ReturnType>(endpoint: string, params: RequestParams) {
  return baseRequest<ReturnType>('post', endpoint, params);
}

export async function patch<ReturnType>(endpoint: string, params: RequestParams) {
  return baseRequest<ReturnType>('patch', endpoint, params);
}

export async function put<ReturnType>(endpoint: string, params: RequestParams) {
  return baseRequest<ReturnType>('put', endpoint, params);
}

export async function destroy<ReturnType>(endpoint: string, params: RequestParams) {
  return baseRequest<ReturnType>('delete', endpoint, params);
}
