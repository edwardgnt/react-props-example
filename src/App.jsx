import { useState } from 'react'
import './App.css'
import Product from "./components/Product"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Product 
        name="Amazon Echo"  
        description="Your AI assistant"
        price={59.99}
      />

      <Product 
        name="Iphone 14"  
        description="The best phone"
        price={1000.00}
      />

      <Product 
        name="MacBook Pro"  
        description="Your favorite computer"
        price={2500.00}
      />
    </div>
  )
}

export default App
