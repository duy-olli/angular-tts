/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'openfptTts', function ($scope, openfptTts) {
	//TODO - put any directive code here

	$scope.texts = 'Đường Nam Kỳ Khởi Nghĩa, đoạn qua giao lộ Nguyễn Thị Minh Khai\nĐường Cộng Hòa, đoạn qua giao lộ Tân Kỳ Tân Quý';
	$scope.voice = 'both';
	$scope.speed = 0;

	$scope.speak = function () {
		openfptTts.apiKey = $scope.apiKey;
		openfptTts.voice = $scope.voice;
		openfptTts.speed = $scope.speed;


		var texts = $scope.texts.split('\n');

		openfptTts.speakArray(texts, {}, function (data) {
			console.log('Done!');
		});
	};
}]);