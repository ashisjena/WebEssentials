var templates = '<table border={border}>' +
				'<tr><th>Last</th><td>{last}</td></tr>' +
				'<tr><th>First</th><td>{first}</td></tr>' +
				'</table>';

var data = {
		first: "Car1",
		last: "Hollywood",
		border: 2
};

if(typeof String.prototype.supplant !== 'function'){
	String.prototype.supplant = function(obj){
		return this.replace(/{([^{}]*)}/g, function(a, b){
			var r = obj[b];
			return typeof r === 'string' ? r : a;
		});
	};
}


console.log(templates.supplant(data));