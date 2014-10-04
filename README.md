jocal
=====

```
npm install jocal
```

does this.
```js
var jocal = require('jocal');
var MY_KEY = 'super-sweet-obj-that-i-must-have-for-later';
var obj = {
	hey: 'everyone'
};

jocal(MY_KEY, obj);
```

then later do this
```js
var jocal = require('jocal');
var MY_KEY = 'super-sweet-obj-that-i-must-have-for-later';

var obj = jocal(MY_KEY);

alert(obj.hey); // alerts 'everyone'
```

then even later still you can delete it
```js
var jocal = require('jocal');
var MY_KEY = 'super-sweet-obj-that-i-must-have-for-later';

jocal(MY_KEY, null);
```

pro usage
---------
```js
var jocal = require('jocal'),
	myFlag = jocal.bind(null, 'myFlagKey');

myFlag(true);
console.log(myFlag() ? 'print this' : 'not this');
```	
