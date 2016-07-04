/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'openfptTts', function ($scope, openfptTts) {
	//TODO - put any directive code here

	$scope.texts = 'Đường Nam Kỳ Khởi Nghĩa, đoạn qua giao lộ Nguyễn Thị Minh Khai\nĐường Cộng Hòa, đoạn qua giao lộ Tân Kỳ Tân Quý';

	$scope.speak = function () {
		openfptTts.apiKey = $scope.apiKey;

		var texts = $scope.texts.split('\n');

		openfptTts.speechArray(texts, {}, function (data) {
			console.log('Done!');
		});
	};
}]);