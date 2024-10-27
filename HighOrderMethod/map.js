let product = [
    {
        titel: "Samsung",
        Price: 1500
    },
      {
        titel: "Apple",
        Price: 1600
    },
      {
        titel: "Nokia",
        Price: 1000
    },
      {
        titel: "OnePlas",
        Price: 1300
    },
      {
        titel: "Motorola",
        Price: 11500
    },
    
    ]

    let discountArr = product.map((ele)=>{
        let discount = ele.Price - (ele.Price*0.1)
        return {
            title : ele.titel,
            price: discount
        }
    })
    console.log(discountArr)

    
    
    // let discountarr = product.map(function (ele){
    //     let discount = ele.Price -(ele.Price*0.1)
        
    //     return {
    //         title: ele.titel,
    //         price: discount
    //     }
        
    // })
    
    // console.log(discountarr)
    
    console.log(product) // Does't modify original array