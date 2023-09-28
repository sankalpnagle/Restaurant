import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ml-auto">
                <div className="container-fluid">
                    <a className="navbar-brand ps-3" href="#">Restaurant Landing Page</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-4 pe-4" id="navbarNav">
                        <div className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Landing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">

                                <span className='nav-link'> <FontAwesomeIcon icon={faCartShopping} /></span>
                            </li>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
