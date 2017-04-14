var jsonString = '{' +
	'"firstname" : "Ashis",'+
	'"middlename" : null,'+
	'"age" : 30,'+
	'"city" : "Bangalore",'+
	'"skills" : [ "java", "javascript", "database" ],'+
	'"married" : true,'+
	'"error" : "error",'+
	'"familymembers" : {'+
		'"mother" : "Swadhinbala Jena",'+
		'"wife" : "Ritun",'+
		'"sister" : "Lipi"'+
		'}'+
	'}';

console.log(jsonString);
var emp = JSON.parse(jsonString);
console.log(emp);

delete emp.error;
console.log(emp);

console.log(emp.firstname);
console.log(emp.middlename);
console.log(emp.age);
console.log(emp.city);
console.log(emp.married);

var skillArr = emp.skills;
var arrLength = skillArr.length;
for (var i = 0; i < arrLength; i++) {
	console.log(skillArr[i]);
}

var familyMembers = emp.familymembers;

for(var key in familyMembers){
	console.log(key + " : " + familyMembers[key]);
}

emp.familymembers.wife = "Guduli";
console.log("My wife name is : " + emp.familymembers.wife);
