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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PostDetail = void 0;
var postSummary_1 = __importDefault(require("./postSummary"));
var todo_1 = __importDefault(require("./todo"));
var PostDetail = /** @class */ (function (_super) {
    __extends(PostDetail, _super);
    function PostDetail(postData, todoData) {
        var _this = _super.call(this, postData) || this;
        _this.price = postData.price;
        _this.currency = postData.currency;
        _this.todos = todoData.map(function (item) { return new todo_1["default"](item); });
        return _this;
    }
    return PostDetail;
}(postSummary_1["default"]));
exports.PostDetail = PostDetail;
