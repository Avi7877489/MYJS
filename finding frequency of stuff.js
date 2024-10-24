let strr =  "aabbbccddeffghhhhhi"

function fun(str){
    
    let obj = {}
    // for(let i = 0;i< str.length;i++){
        
    //     if(obj[str[i]]){
    //         obj[str[i]]++
    //     }else{
    //         obj[str[i]] = 1
    //     }
    // }
    
    for(let key of str){
        obj[key] ? obj[key]++ : obj[key] = 1
    }
    
    
    return obj
}

console.log(fun(strr))