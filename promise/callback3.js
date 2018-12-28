/**
 * Created by jyn on 2018/12/28.
 */
let fs = require('fs');
let school = {}
// 发布订阅模式
// 1） 先把需要订阅的内容保存到队列里
// 2） 绑定事件 on 添加到队列 添加想触发的事件
// 3） 触发emit, 可以自己控制触发条件
// 观察者模式 基于发布订阅 mvvm

let Dep = {
	arr: [],
	on(fn){
		this.arr.push(fn)
	},
	emit(){
		// 达到预期再触发
		console.log('emit')
		if(Object.keys(school).length === 2){
			this.arr.forEach(function (fn) {
				console.log('emit!!')
				fn()
			})
		}
	}
}
Dep.on(function(){
	console.log(Dep.arr)
})
Dep.on(function(){
	console.log(Dep.arr)
})

fs.readFile('1.txt','utf8',(err,data)=>{
	school.name = data
	Dep.emit()
})
fs.readFile('2.txt','utf8',(err,data)=>{
	school.age = data
	Dep.emit()
})