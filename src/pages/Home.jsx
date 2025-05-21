import React from 'react'
import profileImg from '../assets/Profile.jpeg'
import './Home.css'
import About from '../components/About'
import Contact from '../components/Contact'

function Home(){
    return(
       <div>
         <section className='mt-2 d-flex align-items-center text-white bg-dark py-5 home'>
            <div className='container '>
                <div className='row align-items-center'>
                    <div className='col-md-6 mb-4 mb-md-0' data-aos='fade-right'>
                        <h1 className='display-5 fw-bold'>Hi, I'm <span className='text-info'>Revathi</span></h1>
                        <p className='lead'> I'm a passionate Frontend Developer specializing in building responsive and interactive websites using React, JavaScript, Bootstrap, and more.</p>
                        <a href='/projects' className='btn btn-info btn-lg mt-3'>View Projects</a>
                    </div>
                    <div className='col-md-6 text-center' data-aos='fade-left'>
                        <img
                          src={profileImg}
                          alt="Profile"
                          className='img-fluid rounded-circle shadow'
                          style={{maxWidth:"300px"}}
                        />

                    </div>
                    
                </div>
                <hr/>
                  <About />
                 
                
            </div>
        
        </section>
        <Contact />
       </div>
       
    )
}

export default Home