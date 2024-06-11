import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import LegacyRegistration from './components/legacyData/legacyregistration';
import CaseRegister from './components/caseRegistration/caseRegister';

function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <BrowserRouter>
  <Routes>
    {/* <Route  path='/register' element={<CaseRegister />}/> */}
    <Route path='/' element={<Home />} />
    <Route path='/case'  element={<LegacyRegistration />} />
    <Route path='/petitioner' element={<CaseRegister />} />
  </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
