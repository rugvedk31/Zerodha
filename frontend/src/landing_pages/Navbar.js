import React from 'react'

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "#fff" }}>
            <div className="container p-2">
                <a className="navbar-brand" href="/">
                    <img src="media/images/logo.svg" alt="logo" style={{ width: "100%", maxWidth: "120px", height: "auto" }} />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <a className="nav-link active text-muted" aria-current="page" href="/">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-muted" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-muted" href="/">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-muted" href="/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-muted" href="/">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
