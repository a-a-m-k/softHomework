//N107
const FindK = (function() {
  var k=0,m,n=1;

    return { 
        defineM(num) {
        	if(num >1 && (num ^ 0) === num){
           m=num }
           else{
           	console.log(`'M' must be positive integer`)
           }
        },
        
        Count() {
         
            while((n=n*4)<m){
                k++;
            }
            return k;
        }
    }}());




var prompt = require('prompt');
 

  
  prompt.start();
 
  
  
  prompt.get(['M'],(err,result) => {

      console.log('M: '+ result.M);
      FindK.defineM(parseInt(result.M));
      console.log("4^k < M,K= "+FindK.Count());
       
  });















