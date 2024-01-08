// .map() is a array method which perform some operations on each 
// item of an array and return a new array.

const arr = ['str1','abhi','aman','raj','rahul']

const newArr = arr.map((val)=>{
    return val.toUpperCase()
})

console.log(newArr)