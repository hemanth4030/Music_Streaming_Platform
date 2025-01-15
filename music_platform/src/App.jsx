import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
function App() {

  return (
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
        <nav className='navbar navbar-expand-lg navbar-black bg-dark'>
          <img src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png' alt='logo' className='logo' />
          <ul className='navbar-nav'> 
            <li className='nav-item'>
              <a href='#' className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>Library</a>
            </li>
             <li className='nav-item'>
              <a href='#' className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>Contact</a>
            </li> 
          </ul>
        </nav>
      </div>
    </div>
   </div>
  )
}

export default App
