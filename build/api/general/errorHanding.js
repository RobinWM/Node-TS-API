"use strict";
exports.__esModule = true;
exports.apiErrorHandler = void 0;
exports.apiErrorHandler = function (err, req, res, next) {
    switch (req.app.get("env")) {
        case "development":
            console.log(err);
            return res.status(err.status).json(err);
        case "production":
            return res.status(err.status).json(err.publicVersion);
    }
};
