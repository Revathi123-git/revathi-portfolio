import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './App.css'
import { useEffect } from 'react'

function App() {
  
  useEffect(()=>{
   AOS.init({duration:1000})
  },[])

  return (
    <>
      <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
       <Navbar />
       <main className='flex-grow-1 mt-5'>
         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          
         
        </Routes>
       </main>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
