module.exports = function multiply(first, second) {
  let stack=[];
let firstArr=String(first).split('').reverse();

let secondArr=String(second).split('').reverse();

for ( var i=0; i<firstArr.length; i++){
    for ( var j=0; j<secondArr.length; j++) {
        let q=firstArr[i]*secondArr[j];
      
        stack[i+j]= stack[i+j]>= 0 ? stack[i+j]+q : q;
    
    }
    }
    for (let n=0 ; n<stack.length ; n++){
      
      let p=Math.floor(stack[n]/10);
      stack[n]=stack[n]%10;
      if (stack[n + 1]){
        stack[n + 1] += p;
      }
      else if (p != 0){
        stack[n + 1] = p;
      }
    }
    return stack.reverse().join('');
}
