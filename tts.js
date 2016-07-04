/**
@fileOverview

@toc

*/

'use strict';

angular.module('fpt.angular-tts', []).factory('openfptTts', ['$http', '$timeout', function ($http, $timeout) {
	var self = {};
	var rootUrl = 'http://api.openfpt.vn/text2speech/?api_key=';

	var count = 0;


	//private methods and properties - should ONLY expose methods and properties publicly (via the 'return' object) that are supposed to be used; everything else (helper methods that aren't supposed to be called externally) should be private.

	var audioElement = document.getElementById(self.elementId);

	var loadTrack = function (url) {
		audioElement.src = url;
		audioElement.load();
	};

	var playTrack = function (url, cb) {
		var canplay = function () {
			console.log('Can play');
			audioElement.removeEventListener('canplay', canplay, false);
			audioElement.addEventListener('ended', callback, false);
			audioElement.play();
		};

		var onError = function () {
			console.log('Retry');

			$timeout(function () {
				loadTrack(url);
			}, 1000);
		};

		var callback = function () {
			audioElement.removeEventListener('error', onError, false);
			audioElement.removeEventListener('ended', callback, false);
			cb();
		};

		audioElement.addEventListener('canplay', canplay, false);
		audioElement.addEventListener('error', onError, false);
		loadTrack(url);
	};

	var speak = function (text, speechOptions, successCallback, errorCallback) {
		speakArray([text], speechOptions, successCallback, errorCallback);
	};

	var speakArray = function (texts, speechOptions, callback) {
		var voice = self.voice;
		var play = function (text, cb) {
			var options = {
				method: 'POST',
				url: rootUrl + self.apiKey,
				skipAuthorization: true,
				headers: {
					'content-type': 'application/json',
					voice: (voice === 'both') ? (count++ % 2) ? 'male' : 'female' : voice
				},
				data: JSON.stringify(text)
			};

			$http(options).then(function (res) {
				var data = res.data;

				playTrack(data.async, cb);

			}, function () {
				callback(new Error());
			});
		};


		audioElement = document.getElementById(self.elementId);

		var playId = function (i) {
			if (texts) {
				if (i < texts.length) {
					play(texts[i], function (err) {
						if (!err) {
							return playId(i + 1);
						}
					});
				} else {
					return callback(null, {});
				}
			}
		};

		playId(0);

	};

	//public methods & properties
	self = {
		speak: speak,
		speakArray: speakArray,
		elementId: 'openfpt-tts',
		apiKey: '',
		voice: 'both'
	};

	return self;
}]);