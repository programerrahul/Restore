
const products=[
  {name:"Product1",price:100},
  {name:"Product2",price:200}
]
function App() {
  return (
    <div>
      <h1>Restore</h1>
      <ul>
      {
      products.map(item=>(<li>
        {item.name}-{item.price}
      </li>))  
      }
      </ul>
    </div>
  );
}

export default App;
