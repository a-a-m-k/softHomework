
/*N243 a) b) 
Дано натуральное число n. Можно ли представить его в
виде суммы двух квадратов натуральных чисел? Если можно, то
а) указать пару x, y таких натуральных чисел, что n = x^2+y^2;

б) указать все пары x, y таких натуральных чисел, что n = x^2+y^2   x≥ y.*/


var findXY=function() {
   var self = this;
var first=[],sec=[];

this.n = 0;
 
const firstTask =function (){

 for (let x = 1; x * x <= self.n; x++){
  for (let y = 1; y * y <= self.n; y++)
  {if (x * x + y * y == self.n ) {
              first.push(x,y);

              return first;}}}

               
            
    return false;
  }
 const secondTask=function(){
  
  
  for(let x=1; x<self.n; x++){
    const pow=x*x;
    const result=self.n - pow;
    const y= Math.sqrt(result);

if(y===(y ^ 0) && x>y ){
sec.push(x,y);

}
  }
  return sec;
}

this.run = function() {
console.log('first Task '+firstTask());
console.log('Second Task '+secondTask());
  };

  


 }

var nodePath = process.argv[0];
var appPath = process.argv[1];
var N = parseInt(process.argv[2]);
var arr=[];
var XY = new findXY();

XY.n=N;
XY.run();






/*console.log("Fill the array, then press CTRL+C");



const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'array> '
});

rl.prompt();

rl.on('line',(line) => {
  switch (line.trim()) {
    case 'break':
      console.log('End');
      break;
    default:
     arr.push(parseInt(line));
     console.log(arr)
    
  }
  rl.prompt();
}).on('close',(value,key) => {


 rl.close();
});
*/