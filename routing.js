import { BrowserRouter, Link, React, Route } from 'react-router-dom';
import Ems from './Ems'
import Register from './Register'
import ShowAccount from './ShowAccount'

export const routing = (

    <>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to ="#">Navbar</Link>
                    <button className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to ="/ems">Ems</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ="/showaccount">ShowAccount</Link>
        </li>
      </ul>
    </div>
  </div>
            </nav>
            <Route exact path="/" component={Ems} />
            <Route path="/ems" component={Ems} />
            <Route path="/register" component={Register} />
            <Route path="/showaccount" component={ShowAccount}/>
        
        </BrowserRouter>
        </>
);

