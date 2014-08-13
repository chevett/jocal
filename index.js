var fake = {},
	IS_BROWSER = typeof window !== 'undefined';

function _localStorage(key, value){
	var returnVal;

	if (value === undefined){
		try {
			if (IS_BROWSER){
				returnVal = window.localStorage.getItem(key);
				returnVal = JSON.parse(returnVal);
			} else {
				returnVal = JSON.parse(fake[key]);
			}
		}
		catch(err){
			console.error(err);
		} 
		finally{
			return returnVal;
		}
	}

	if (IS_BROWSER){
		window.localStorage.setItem(key, JSON.stringify(value));
	} else {
		fake[key] = JSON.stringify(value);
	}

	return value;
}

module.exports = _localStorage;
