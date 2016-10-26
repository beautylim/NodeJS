var fs = require("fs");

var data = 'swift，网络编程，算法都是必备的掌握技能';

var writeStream = fs.createWriteStream('input.txt');

writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
	console.log("写入完成");
});

writeStream.on('error',function(err){
	console.log(err.stack);
});
console.log("程序执行完毕");
