"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PublicInfo = exports.APIError = void 0;
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(name, message, status) {
        var _this = _super.call(this) || this;
        _this.status = status;
        _this.name = name;
        _this.message = message;
        return _this;
    }
    return APIError;
}(Error));
exports.APIError = APIError;
var PublicInfo = /** @class */ (function () {
    function PublicInfo(message, status, properties) {
        this.status = status;
        this.properties = properties;
    }
    return PublicInfo;
}());
exports.PublicInfo = PublicInfo;
