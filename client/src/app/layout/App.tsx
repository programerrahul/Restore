
// const products=[
//   {name:"Product1",price:100},
//   {name:"Product2",price:200}

import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/catalog";
import { Product } from "../models/Product";
import Header from "./Header";

// ]
function App() {

 //const [products,setProduct]=useState([{name:"Product1",price:100},{name:"Product2",price:200}]);
 const [products,setProduct]=useState<Product[]>([]);  // declare with product interface
 
 useEffect(()=>{
   fetch("http://localhost:5000/api/products").then(res=>res.json()).then(data=>setProduct(data))
 },[]);

 function addProduct(){
   console.log("in add product function");
   //setProduct([...products,{name:"Product1",price:100}]);  // concat the new array object in products 
   //setProduct(prevState=>[...prevState,{name:"Product"+(prevState.length+1),price:(prevState.length+1)*100}]);  // concat the new array object in products 
   setProduct(prevState=>[...prevState,
    {name:"Product"+(prevState.length+1),
    price:(prevState.length+1)*100,
    id:prevState.length+1,
    brand:"Some brand",
    description:"some descritpion",
    pictureUrl:"http://picsum.photos/200"
  }]);
 }
  return (
    <>
    <CssBaseline/>
      <Header/>
      <Container>
    <Catalog products={products} addProduct={addProduct}/>
    </Container>
    </>
  );
}

export default App;
