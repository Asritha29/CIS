import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CaseRegister} from './components/caseRegistration/caseRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <BrowserRouter>
  <Routes>
    <Route  path='/register' element={<CaseRegister />}/>
  </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
