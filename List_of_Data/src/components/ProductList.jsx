

const ProductList = () => {
    const product = [
        { id : 1 , name:"Phone"  ,price: "$699" } ,
        {id:2 , name : "LapTop" , price : "$1200"} ,
        {id : 3 , name : "HeadPhones" , price:"$199"} ,
    ] ; 
  return (
    <div>
    {product.map(({ id , name , price }) =>
    <ul key={Math.random()}>
        <li>id : {id}</li>
        <li>Name : {name}</li>
        <li>Price : {price}</li>
    </ul>
)}
    
</div>
  )
}

export default ProductList
