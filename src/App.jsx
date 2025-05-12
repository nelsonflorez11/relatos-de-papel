import { useState } from 'react'
import './App.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Copyright from "./components/copyright/copyright.jsx";

function App() {
    return (
        <>
            <Header/>
            <Footer/>
            <Copyright/>
        </>
    );
}

export default App
