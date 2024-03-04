import express, { Request, Response } from "express";
import { IHttpRequest } from "../_entities";

export function httpRequestCallBack(controller: any) {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      ip: req.ip,
      path: req.path,
      method: req.method,
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent"),
      },
      //   loggedinuser: req.user,
    };

    try {
      const httpResponse = await controller(httpRequest);
      if (httpResponse) {
        res.set(httpResponse.headers);
        res.type("json");

        //response sent to the client based on a success call
        res.status(httpResponse.statusCode).send(httpResponse.body);
      }
    } catch (err) {
      //response sent to the client based on an error type thrown in the application
      res.status(err.statusCode).send(err.data);
    }
  };
}
