"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseType = void 0;
class ResponseType {
    //static method for Json responses used by the controller
    static responseIsJson(data) {
        return {
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 200,
            body: {
                code: "00",
                data: data,
            },
        };
    }
    //static response for http 400 error code bad requests used by the controller
    static badRequest(err) {
        return {
            headers: {
                "Content-Type": "application/json",
            },
            statusCode: 400,
            body: {
                code: "99",
                data: err.message,
            },
        };
    }
}
exports.ResponseType = ResponseType;
//# sourceMappingURL=appResponse.js.map