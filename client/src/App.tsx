import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch, setUser } from './components/redux/AppAction'
import { RootState } from './components/redux/Store'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import './styles/App.scss'
import Nav from './components/Navbar'
import Home from './components/Home'
import Reg from './components/auth/Register'
import Log from './components/auth/Login'
import FP from './components/auth/ForgotPassword'
import Col from './components/Collection'
import API from './components/API'
import NF from './components/errors/NotFound'

const App: React.FC = () => {
    const dispatch = useDispatch()
    const appState = useSelector((state: RootState) => state.APP)
    const searchHandler = (s: string) => dispatch(setSearch(s))
    const authNav = ['/register', '/login'].includes(window.location.pathname)
    React.useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:3001/API/auth', { withCredentials: true })
                const photo = Buffer.from(res.data.photo.data).toString('base64')
                dispatch(setUser({ user_id: res.data.user_id, photo, name: res.data.name, uname: res.data.uname, email: res.data.email }))
            } catch {
                dispatch(setUser(null))
            }
        })()
    }, [appState.user])
    return (
        <BrowserRouter>
            <header className="fixed w-screen">
                {!authNav && <Nav onSearch={searchHandler} isUser={appState.user} />}
                {authNav && <a href="/" className="absolute top-4 left-4 text-[1.2rem] text-white no-underline">&#8592; Back to home</a>}
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home search={appState.search} isUser={appState.user} />} />
                    <Route path='s' element={<Home search={appState.search} isUser={appState.user} />} />
                    <Route path='collection' element={appState.user ? <Col /> : <Navigate to='/login' />} />
                    <Route path='API' element={appState.user ? <API /> : <Navigate to='/login' />} />
                    <Route path='register' element={!appState.user ? <Reg /> : <Navigate to='/' />} />
                    <Route path='login' element={!appState.user ? <Log /> : <Navigate to='/' />} />
                    <Route path='fp' element={!appState.user ? <FP /> : <Navigate to='/' />} />
                    <Route path='*' element={<NF />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App