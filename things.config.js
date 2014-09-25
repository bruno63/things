'use strict';

angular.module('things', ['core'])
.config(function ($stateProvider) {
	$stateProvider
	.state('things', {
		url: '/things',
		templateUrl: 'app/things/content.html',
		controller: 'ThingsCtrl',
		authenticate: true
	})
	/*
	.state('things.import', {
		url: 'things/import',
		templateUrl: 'app/things/import.html',
		controller: 'ThingsImportCtrl'
	})
	.state('things.export', {
		url: 'things/export',
		templateUrl: 'app/things/export.html',
		controller: 'ThingsExportCtrl'
	})
*/
	;
});