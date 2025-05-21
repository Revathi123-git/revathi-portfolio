import React from 'react'
import {Link} from 'react-router-dom'

function  Navbar(){
    return(
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
                <div className='container'>
                    <a class="navbar-brand fw-bold text-primary" href="#">R.</a>
                    <Link to='/' className='navbar-brand'>Revathi Portfolio</Link>
                    <button
                     className='navbar-toggler'
                     type='button'
                     data-bs-toggle='collapse'
                     data-bs-target='#navbarNav'
                     aria-controls='navBarNav'
                     aria-expanded='false'
                     aria-label="toggle navigation"
                    >
                     <span className='navbar-toggler-icon'></span>
                    </button>
                   <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item active text-white'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item active text-white'>
                            <Link to='/skills' className='nav-link'>Skills</Link>
                        </li>
                        <li className='nav-item active text-white'>
                            <Link to='/projects' className='nav-link'>Projects</Link>
                        </li>
                       
                    </ul>
                   </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar