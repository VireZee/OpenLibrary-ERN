import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import Reg from './components/auth/Register';
import Log from './components/auth/Login';
// import FP from './components/auth/ForgotPassword';
import Col from './components/Collection';
import API from './components/API';


const App: React.FC = () => {
    const [search, setSearch] = useState<string>();
    const searchHandler = (s: string) => setSearch(s);
    const Navbar = ['/register', '/login'].includes(window.location.pathname);
    return (
        <BrowserRouter>
            <header className="fixed w-screen">
                {!Navbar && <Nav onSearch={searchHandler} />}
                {Navbar && <a href="/" className="absolute top-4 left-4 text-[1.2rem] text-black no-underline">&#8592; Back</a>}
            </header>
            <main>
                <Routes>
                    <Route path="*" element={<Home search={search} />} />
                    <Route path="collection" element={<Col />} />
                    <Route path="API" element={<API />} />
                    <Route path="register" element={<Reg />} />
                    <Route path="login" element={<Log />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}
export default App;