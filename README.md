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

then event later still you can delete it
```js
var jocal = require('jocal');
var MY_KEY = 'super-sweet-obj-that-i-must-have-for-later';

jocal(MY_KEY, null);
```
