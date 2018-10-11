"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = Route;
exports.routes = void 0;
var routes = new Set();
exports.routes = routes;

function Route(route, element) {
  //routes.add(route, element)
  return function run(cl) {
    console.log('Route decorator ran');
  };
}