import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Signup from './SignUp/Signup'
import About from './About/About'
import HeaderLayout from '../Layouts/HeaderLayout/HeaderLayout'
import BannerLayout from '../Layouts/BannerLayout/BannerLayout'
import Books from './Books/Books'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderLayout />}>
                    <Route element={<BannerLayout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>
                    <Route path="books" element={<Books />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
