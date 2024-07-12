import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div>
            <nav className="navbar nav-expand-lg bg-light shadow" style={{ background: "linear-gradient(90deg, black, gray)" }}>
                <ul className="navbar nav w-100">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" style={{ color: "white" }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/jobs" className="nav-link" style={{ color: "white" }}>Jobs</Link>
                    </li>
                    <li className="nav-item ms-auto ">
                        <form className="form-inline " onSubmit={handleSearch}>
                            <div className="input-group ">
                                <input
                                    className="form-control rounded-end"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success" type="submit" style={{ marginLeft: "8px" }}>Search</button>
                                </div>
                            </div>
                        </form>
                    </li>
                    <li className="nav-item ms-auto" style={{ color: "white" }}>
                        <Link to="/login" className="nav-link" style={{ color: "white" }}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link" style={{ color: "white" }}>Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" style={{ color: "white" }}>My Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <b style={{ color: "white", marginRight: ".5rem" }}>Job Board</b><br />
                        <img
                            style={{ width: '50px', height: '50px', borderRadius: '50px', marginLeft: ".5rem" }}
                            src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg"
                            alt="Job Board Logo"
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
