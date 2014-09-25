'use strict';

angular.module('things')
.controller('ThingsCtrl', function ($scope, $http, $translatePartialLoader, AppConfig, socket) {
	AppConfig.setCurrentApp('Notes', 'fa-pencil', 'notes', 'app/things/menu.html');
	$translatePartialLoader.addPart('things');
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
})
  /*
  .controller('ThingsImportCtrl', function() {
  console.log('executing ThingsImportCtrl');
})
.controller('ThingsExportCtrl', function() {
  console.log('executing ThingsExportCtrl');
})
*/
;

