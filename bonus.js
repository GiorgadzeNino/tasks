let arr=['a','e','i']
let newarr=[]
function myFunction(arr,str){
 let k=arr.map(item=>{
     for(let i=0;i<str.length;i++){
         if(item===str[i]){
            newarr.push(i)
         }
         else if(i===str.length-1)
         {
             console.log( "This symbol does not exist in the first argument")
         }
       
     }
     
 })
}
 console.log(newarr)   
    myFunction(arr,"javascript")