"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DataStore = void 0;
var post_json_1 = __importDefault(require("./post.json"));
var todos_json_1 = __importDefault(require("./todos.json"));
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.posts = post_json_1["default"];
    DataStore.todos = todos_json_1["default"];
    return DataStore;
}());
exports.DataStore = DataStore;
