import {Button } from "@mui/material";
import ProductList from "./ProductList";

export default function Catalog(props:any){
    return(
    // <>
    // <ul>
    // {
    // props.products.map(
    //   (item:any)=>(
    // <li key={item.id}> {item.name}-{item.price}</li>
    // )
    // )  
    // }
    // </ul>
    // <button onClick={props.addProduct}>Add</button>
    // </>
    <>
    <ProductList products={props.products}></ProductList>
    <Button variant="contained" onClick={props.addProduct}>Add</Button>
    </>
    )
    
}