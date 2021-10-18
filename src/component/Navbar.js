import React from 'react';
import { GiMilkCarton } from 'react-icons/gi';
import './Home'
import './Shoppe'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector((state)=>state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid">
               <NavLink className="navbar-brand fw-bold fs-4" to="/">cooking tree treats</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">home<span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shoppe">dessert shoppe</NavLink>
                        </li>
                    </ul>
                <div className="button">
                    <NavLink to="/cart" className="btn btn-outline-secondary btn-sm">
                        <GiMilkCarton/> carton ({state.length})
                    </NavLink>

                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

