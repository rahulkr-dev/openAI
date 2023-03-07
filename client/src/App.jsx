import { useState } from 'react'
import './App.css'
import AllRoutes from './pages/AllRoutes';
import Landing from './pages/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllRoutes />
    </>
  )
}

export default App
