
const ProductInfo = () => {
    const product  = {
        name : 'MSI' , 
        price : 1200 ,
        availability : " in stock " ,
    } ; 
  return (
    <div>
      <h1>Name : {product.name}</h1>
      <h1>availability : {product.availability}</h1>
      <h1>price : ${product.price}</h1>
    </div>
  )
}

export default ProductInfo
