/**
 * Created by jyn on 2019/1/3.
 */
// 基础班
function Promise(executor){
	let self = this
	self.value = undefined
	self.reason = undefined
	self.status = 'pending'
	self.onResolvedCallbacks = []
	self.onRejectedCallbacks = []
	function resolve(value){
		if(self.status === 'pending'){
			self.value = value
			self.status = 'resolved'
			self.onResolvedCallbacks.forEach(fn=>fn())
		}
	}
	function reject(reason) {
		if(self.status === 'pending'){
			self.reason = reason
			self.status = 'rejected'
			self.onRejectedCallbacks.forEach(fn=>fn())
		}
	}
	try {
		executor(resolve, reject)//?
	}catch (e){
		reject(e)
	}
}
Promise.prototype.then = function(onFullfilled, onRejected) {
	let self = this
	if(self.status === 'resolved') {
		onFullfilled(self.value)
	}
	if(self.status === 'rejected') {
		onRejected(self.reason)
	}
	if(self.status === 'pending') {
		self.onResolvedCallbacks.push(() => {
			onFullfilled(self.value)
		})
		self.onRejectedCallbacks.push(() => {
			"use strict";
			onRejected(self.reason)
		})
	}
}
module.exports = Promise