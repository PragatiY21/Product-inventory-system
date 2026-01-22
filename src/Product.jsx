import productdata from './product.json'
const Product =()=>{

    //const [Data, setData]=useState(productdata);
     
    return (
        <div>
            <h1>Product List</h1>
            {productdata.map((x)=><p>{x.id}</p>)}
           
        </div>
    )
}
export default Product;