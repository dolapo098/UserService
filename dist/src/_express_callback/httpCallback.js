"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequestCallBack = void 0;
function httpRequestCallBack(controller) {
    return (req, res) => __awaiter(this, void 0, void 0, function* () {
        const httpRequest = {
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
            const httpResponse = yield controller(httpRequest);
            if (httpResponse) {
                res.set(httpResponse.headers);
                res.type("json");
                //response sent to the client based on a success call
                res.status(httpResponse.statusCode).send(httpResponse.body);
            }
        }
        catch (err) {
            //response sent to the client based on an error type thrown in the application
            res
                .status(err.statusCode)
                .json({ error: err.name, message: err.message });
        }
    });
}
exports.httpRequestCallBack = httpRequestCallBack;
//# sourceMappingURL=httpCallback.js.map