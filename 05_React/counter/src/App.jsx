import { useState } from 'react';

import './App.css'

function App() {

const [count, setCount]=useState(0)
  
const increse=()=>{
  setCount(count+1)
}

const decrese=()=>{
  setCount(count-1)
}

  return (
<>
<h1>{count}</h1>
<h2>{count}</h2>
<h3>Cart:{count}</h3>
<button onClick={increse}>+</button>
<button onClick={decrese}>-</button>
</>
  )
}

export default App