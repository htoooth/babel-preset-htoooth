"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var presets = [["@babel/env", {
  targets: {
    browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
  },
  useBuiltIns: "entry"
}]];
var overrides = [{
  test: [],
  presets: []
}];
var defaultPlugins = ["@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-syntax-import-meta", "@babel/plugin-proposal-export-namespace-from", "@babel/plugin-proposal-export-default-from"];
var extPlugins = ["@babel/plugin-proposal-function-bind", "@babel/plugin-proposal-logical-assignment-operators", ["@babel/plugin-proposal-optional-chaining", {
  "loose": false
}], ["@babel/plugin-proposal-pipeline-operator", {
  "proposal": "minimal"
}], ["@babel/plugin-proposal-nullish-coalescing-operator", {
  "loose": false
}], "@babel/plugin-proposal-do-expressions", ["@babel/plugin-proposal-decorators", {
  "legacy": true
}], "@babel/plugin-proposal-function-sent", "@babel/plugin-proposal-numeric-separator", "@babel/plugin-proposal-throw-expressions", ["@babel/plugin-proposal-class-properties", {
  "loose": false
}]];

var _default = (0, _helperPluginUtils.declare)(function (api, opts) {
  api.assertVersion(7);
  var plugins = defaultPlugins;

  if (opts.all) {
    plugins = defaultPlugins.concat(extPlugins);
  }

  if (opts.targets) {
    presets[0][1].targets = opts.targets;
  }

  if (opts.useBuiltIns) {
    presets[0][1].useBuiltIns = opts.useBuiltIns;
  }

  return {
    presets: presets,
    overrides: overrides,
    plugins: plugins
  };
});

exports.default = _default;