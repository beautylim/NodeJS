var fs = require("fs");
var data = ''

//创建可读流
var readStream = fs.createReadStream('input.txt');

readStream.setEncoding('UTF-8');

readStream.on('data',function(chunk){
	data += chunk;
});

readStream.on('end',function(){
	console.log(data);
});

readStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');
