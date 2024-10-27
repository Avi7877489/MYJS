// let arr = [1,2,3,4,5,6,8]

// let narr = arr.reduce((acumelator,current)=>{
//     return acumelator * current
// })
// console.log(narr)

let product = [
    {
        title : "Samsung 1" , 
        price : 1200  // 1080
    } , 
    {
        title : "apple 1" , 
        price : 1400 
    } , 
    {
        title : "nokia 1" , 
        price : 800 
    } ,
    {
        title : "onePlus 1" , 
        price : 1100 
    } , 
    {
        title : "Motorola 1" , 
        price : 1300 
    }
]

let finalPrice = product.reduce((ace,curr)=>{
    return ace + curr['price']
},0)

console.log(finalPrice)