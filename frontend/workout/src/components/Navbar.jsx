import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-white">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-success" to={'/'}>WorkoutBuddy</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/'} aria-current="page">Home
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/add_workout'} >Add Workout</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex my-2 my-lg-0">
                            <input className="form-control me-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
