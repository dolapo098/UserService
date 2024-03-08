export interface IHttpRequest {
  body: any;
  params: any;
  query: any;
  ip: string;
  path: string;
  method: string;
  headers: any;
  //   loggedinuser: req.user,
}

export type HttpJsonResponse = {
  headers: {
    "Content-Type": string;
  };
  statusCode: number;
  body: {
    code: string;
    data: any;
  };
};
