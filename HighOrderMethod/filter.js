let product = [
    {
        titel: "Samsung",
        price: 1500,
        stroge: '512GB'
    },
      {
        titel: "Apple",
        price: 1600,
        stroge: '215GB'
    },
      {
        titel: "Nokia",
        price: 1000,
        stroge: '512GB'
    },
      {
        titel: "OnePlas",
        price: 1300,
        stroge: '512GB'
    },
      {
        titel: "Motorola",
        price: 11500,
        stroge: '215GB'
    },
    
    ]
    
    
    function FilerArray(arr,condition,keyname){
    
    let filterrr = arr.filter((ele)=>{
        return ele[keyname] == condition
    })
    
    return filterrr
    
    }


    
    // console.log(FilerArray(product,'1500','price'))
    console.log(FilerArray(product,'512BG','stroge'))
    
    
    
    
    