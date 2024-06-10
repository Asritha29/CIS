import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <BrowserRouter>
  <Routes>
    {/* <Route  path='/register' element={<CaseRegister />}/> */}
    <Route path='/' element={<Home />} />
  </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
