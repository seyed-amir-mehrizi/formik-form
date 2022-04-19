import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='d-flex flex-column flex-md-row align-items-center  px-md-4 mb-3 bg-white border-bottom shadow-sm'>
            <nav className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Simple Form</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/custom-form">Custom Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header