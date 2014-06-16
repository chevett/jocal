function _localStorage(key, value){
	var returnVal;

	if (value === undefined){
		try {
			returnVal = window.localStorage.getItem(key);
			returnVal = JSON.parse(returnVal);
		}
		catch(err){
			console.error(err);
		} 
		finally{
			return returnVal;
		}
	}

	window.localStorage.setItem(key, JSON.stringify(value));
	return value;
}

module.exports = _localStorage;
