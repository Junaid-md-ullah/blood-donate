import React from 'react';
import { Link } from 'react-router-dom';
import Admin from '../AdminPanel/Admin';

const Header = () => {
    return (
        <div className = "">
            
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#EC4C4B'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">Blood Bank</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                   
                    </ul>
                    <div className="my-2 my-lg-0">
                        <Link to="/admin" style={{color:'black'}}>
                            Admin
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;