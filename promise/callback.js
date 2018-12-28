/**
 * Created by jyn on 2018/12/27.
 */
function read(callback){
	let r = 'hi'
	setTimeout(()=>{
		callback(r)
	},3000)
}
read(function(result){
	console.log(result)
})

