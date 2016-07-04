# openfpt-ng-tts

An AngularJS service to speak the text via the OpenFPT TTS (text-to-speech) API. 

## Installation

### Install through bower:

```bash
# from the terminal at the root of your project
bower install openfpt-ng-tts --save
```

Or you can install by this repo (not recommended)

```bash
# from the terminal at the root of your project
bower install ducminhquan/openfpt-ng-tts --save
```
    

### Add to your module deps
```javascript
angular.module('xxx', ['fpt.angular-tts']);
```

## Use

### Get the API Key

Go to [Open FPT API Developer Portal](http://dev.openfpt.vn/) to get your API Key

### Create a HTML Audio players on HTML file
```html
    <audio id="openfpt-tts"> </audio>
``` 

### Inject the service

Add openfptTts as injection to use in angular controller

```javascript
angular.module('myApp').controller('HomeCtrl', ['$scope', 'openfptTts', function ($scope, openfptTts) {
    // Your code goes here   
}];
```

### Global config

```javascript
openfptTts.apiKey = 'YOUR_API_GOES_HERE';
openfptTts.elementId = 'openfpt-tts'; //default is 'openfpt-tts'
openfptTts.voice = 'both'; //default is 'both'
```

- `voice` options can be `male | female | both`. When voice is set to `both`, the engine will speak with **male** voice and **female** voice sequentially.


### Method

#### `openfptTts.speak(text, options, cb)`: Speak a singleline of text.
- text `string`: Text you want to speak.
- cb `nodejs callback`