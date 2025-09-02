import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Login from './Login/Login'
import Home from './Home/Home'
import Signup from './SignUp/Signup'
import About from './About/About'
import HeaderLayout from '../Layouts/HeaderLayout/HeaderLayout'
import BannerLayout from '../Layouts/BannerLayout/BannerLayout'
import Books from './Books/Books'
import BookDetail from './BookDetail/BookDetail'

const queryClient = new QueryClient()

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<HeaderLayout />}>
                        <Route element={<BannerLayout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                        </Route>
                        <Route path="books" element={<Books />} />
                        <Route path="books/:bookId" element={<BookDetail />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App
