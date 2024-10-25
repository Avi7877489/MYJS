let add = (str,...num)=>{
  
    let sum = 0
    for(let i = 0;i<num.length;i++){
      sum+= num[i]
    }
    
    return sum + str
    // return num
  }
  
  
  console.log(add('hello',4,5,3,2,5,5,6,3,4))