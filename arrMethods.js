// const arr1 = [1,2,3,4,5,6,7,8,9]

//     // console.log(arr1.slice(1,7))

//     const arr2 = [0,1,2,3,4,5,6,7,8,9]

//     arr2.splice(2,1)

//     console.log(arr2)

let companies = ['bloomberg','microsoft','uber','google','ibm','netflix']

// remove the first company from the array
companies.shift();

//remove uber and add ola in its place 
companies.splice(1,1,'ola')

//add amazon at the end
companies.push('amazon')


console.log(companies)