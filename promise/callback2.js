/**
 * Created by jyn on 2018/12/28.
 */
let fs = require('fs');

function after(times, callback) {
	return function() {
		if(--times === 0){
			callback(school)
		}
	}
}
let out =  after(2, function(data) {
	console.log(data)
})

let school = {}
fs.readFile('1.txt','utf8',(err,data)=>{
	school.name = data
	out()
})
fs.readFile('2.txt','utf8',(err,data)=>{
	school.age = data
	out()
})