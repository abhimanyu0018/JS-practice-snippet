//normal function 

function vowelsCount(str){
    let vCount =0;
    for(i=0;i<str.length;i++){
        if(str[i]=='a' ||str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u')
        {
            vCount++;
        }else{
            continue;
        }
    }

    return vCount;
}

//arrow function

const vCountArrow = (str1) => {
    let vCount =0;
    for(i=0;i<str1.length;i++){
        if(str1[i]=='a' ||str1[i]=='e' ||str1[i]=='i' ||str1[i]=='o' ||str1[i]=='u')
        {
            vCount++;
        }else{
            continue;
        }
    }

    return vCount;

}


console.log(vowelsCount('abhimanyu'))

console.log(vCountArrow('sdfghjkl'))