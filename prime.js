
function checkprime(number){
 let count = 0;

  for(let i=0;i<number;i++){
    if(number%i==0){

      count++;
      
  }
}
if(count == 2){
return true; 
}
return false;
}
 let ans= checkprime(13);
 if(ans===true){
        console.log("prime");
    }else{
        console.log("Not prime");
 }

