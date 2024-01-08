// perform some operation on array 
// but return only one value

const arr = [23,45,67,87,89,44,22]

console.log('sum = ',arr.reduce((acc,curr)=>{
   return acc= acc+curr
},0))


let maxNum =  arr.reduce((acc,curr)=>{
    return acc>curr ? acc:curr
},0)

console.log('max num = ',maxNum)