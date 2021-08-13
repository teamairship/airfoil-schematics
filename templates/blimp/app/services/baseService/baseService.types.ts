export enum Action {
  get = 'get',
  post = 'post',
  put = 'put',
  patch = 'patch',
  delete = 'delete',
}

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
