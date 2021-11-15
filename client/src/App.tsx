
// const products=[
//   {name:"Product1",price:100},
//   {name:"Product2",price:200}

import { useEffect, useState } from "react";
import { Product } from "./Product";

// ]
function App() {

 //const [products,setProduct]=useState([{name:"Product1",price:100},{name:"Product2",price:200}]);
 const [products,setProduct]=useState<Product[]>([]);  // declare with product interface
 
 useEffect(()=>{
   fetch("http://localhost:5000/api/products").then(res=>res.json()).then(data=>setProduct(data))
 },[]);

 function addProduct(){
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
    <div>
      <h1>Restore</h1>
      <ul>
      {
      products.map(
        (item)=>(
      <li key={item.id}> {item.name}-{item.price}</li>
      )
      )  
      }
      </ul>
      <button onClick={addProduct}>Add</button>
    </div>
  );
}

export default App;
