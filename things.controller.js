'use strict';

angular.module('things')
.controller('ThingsCtrl', function ($scope, $http, $translatePartialLoader, $log, cfg, socket) {
	cfg.GENERAL.CURRENT_APP = 'things';
	$translatePartialLoader.addPart('things');
	$log.log('ThingsCtrl/cfg = ' + JSON.stringify(cfg, null, '\t'));

	$scope.awesomeThings = [];

	$http.get('/api/things').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		socket.syncUpdates('thing', $scope.awesomeThings);
	});

	$scope.addThing = function() {
		if($scope.newThing === '') {
			return;
		}
		$http.post('/api/things', { name: $scope.newThing });
		$scope.newThing = '';
	};

	$scope.deleteThing = function(thing) {
		$http.delete('/api/things/' + thing._id);
	};

	$scope.$on('$destroy', function () {
		socket.unsyncUpdates('thing');
	});
});

