'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices', 'appDirectives', 'codemwnci.markdown-edit-preview']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);
var markdowneditpreview = angular.module('codemwnci.markdown-edit-preview', []);

var options = {};
options.api = {};
options.api.base_url = "http://localhost:8001";
