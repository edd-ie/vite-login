import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'

function App() {  
  const [logged, setLogged] = useState(false) 

  return (
    <>
      <BrowserRouter>
        {logged&&<Nav check={setLogged}/>}
        <Routes>
          <Route path='/' element={<Home check={logged}/>} />
          <Route path='/login' element={<Login check={setLogged} logged={logged} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
