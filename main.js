var fs = require("fs");
var data = fs.readFileSync('input.txt')

fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
}) //Non-blocking 코드가 끝나는것을 기다리지 않고 다음 코드 실행

console.log("Program has ended");