function myFunction(symb,str){
let arr=[]

for(let i=0;i<str.length;i++)
{
    let k=str[i]
    if(k===symb){
        arr.push(i)
       
    }
    else{
    if(i==str.length-1){
       alert("this symbol does not exist in the first argument")
    }
    }
}
console.log(arr)  
}
myFunction('a',"SYSTEMcorp.")


