//promise 


var promisefunction=new Promise(function(resolve,reject){

	var flag=true;
	if(flag)
	{
		resolve('clean');//flag is true it go inside the if body and passed the resolve data to success function of promisefunction().
	}
	else
	{
		reject('not clean');//if flag is false it will passed the reject function data to catch function of promisefunction().
	}
});
promisefunction.then(function(fromresolve){
	//when success it will print this  console.log() result.
	console.log("Promise result when resolve call : our room is "+fromresolve);

}).catch(function(fromreject){
	//when rejected it will print this above console.log() result.
	console.log("Promise result when reject call: our room is "+fromreject);
})