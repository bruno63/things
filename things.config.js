'use strict';

angular.module('things', ['core'])
.config(function ($stateProvider) {
	$stateProvider
	.state('things', {
		url: '/things',
		templateUrl: 'app/things/content.html',
		controller: 'ThingsCtrl',
		authenticate: true
	});
});