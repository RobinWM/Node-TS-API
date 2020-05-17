"use strict";
exports.__esModule = true;
exports.DataStore = void 0;
var post_json_1 = require("./post.json");
var todos_json_1 = require("./todos.json");
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.posts = post_json_1["default"];
    DataStore.todos = todos_json_1["default"];
    return DataStore;
}());
exports.DataStore = DataStore;
