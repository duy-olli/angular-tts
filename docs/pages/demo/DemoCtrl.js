/**
*/

'use strict';

angular.module('myApp').controller('DemoCtrl', ['$scope', 'openfptTts', function ($scope, openfptTts) {
	//TODO - put any directive code here

	$scope.texts = 'Đường Nam Kỳ Khởi Nghĩa, đoạn qua giao lộ Nguyễn Thị Minh Khai\nĐường Cộng Hòa, đoạn qua giao lộ Tân Kỳ Tân Quý';
	$scope.voice = 'both';
	$scope.speed = 0;
	$scope.apiKey = "ccaede9c524e47a09eac2684c92c02ed";

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