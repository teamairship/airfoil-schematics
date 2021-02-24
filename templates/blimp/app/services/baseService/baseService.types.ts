export type Action = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type ApiResponse<ResponseType> = {
  data: ResponseType;
  included: Array<any>;
  errors: Array<any>;
};

export type RequestParams = {
  version?: string;
  data?: any;
  urlParams?: any;
};
