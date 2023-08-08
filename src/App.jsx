import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(2)
  let [hovered, setHovered] = useState(false)
  
  const dataToSend = { key: [count, hovered] };
  useEffect(()=>{
    window.parent.postMessage(dataToSend, 'http://localhost:3000');
  },[count])
  return (
    <>
      <p>This is a child </p>
      <input type="button" onClick={()=>setCount(count+1)} value={count}/>
    </>
  )
}

export default App
