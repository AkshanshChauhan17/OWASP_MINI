import { useState } from 'react'
import './App.css'
import './main.scss'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Home />
    </main>
  )
}

export default App
