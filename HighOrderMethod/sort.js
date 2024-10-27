let product = [
    {
        title : "Samsung 1" , 
        price : 1200 
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


let narr = product.sort((a,b)=>{
    return a['price']-b['price']
})


console.log(narr)