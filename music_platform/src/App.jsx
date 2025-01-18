import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css'
function App() {

  return (
   <div className='container-fluid'>
    <div className='row'>
      <div className='col-12'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary col-12">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>       
            <a className="navbar-brand" href="#">
              <h1 className="com_name">Muzic</h1>
            </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-1">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Library</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                </ul>
              </div>
              <div>
          
             </div>  
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div>
            <button className="button_prof" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className="fa-solid fa-magnifying-glass icon"></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto">
            <i className="fa-solid fa-bell icon"></i>
            </button>
          </div>
          <div>
            <button className="button_prof m-auto">
            <i className="fa-solid fa-user icon"></i>
            </button>
          </div>
        </div>
      </nav>    
      </div>
      <div className="modal fade col-12" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <form className="d-flex flex-row justify-content-start" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
   </div>
  )
}

export default App
