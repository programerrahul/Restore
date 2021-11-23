import { useState, useEffect } from "react";
import Agent from "../../app/api/agent";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

export default function Catalog(){
  
const [products,setProduct]=useState<Product[]>([]);  // declare with product interface
 
useEffect(()=>{
//  fetch("http://localhost:5000/api/products").then(res=>res.json()).then(data=>setProduct(data))
Agent.Catalog.list().then(data=>setProduct(data));
},[]);

    return(
    <>
    <ProductList products={products}></ProductList>
    </>
    ) 
    
}