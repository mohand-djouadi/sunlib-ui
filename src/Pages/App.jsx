import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Signup from './SignUp/Signup'
import About from './About/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
