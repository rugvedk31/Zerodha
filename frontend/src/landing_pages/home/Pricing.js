import React from 'react'

function Pricing() {
    return (
        <div className="container">
            <div className="row align-items-start p-5">
                <div className="col-lg-6 mb-4">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price <br />transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href='/' className="text-primary fw-semibold text-decoration-none">
                        See pricing <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className="col-lg-6 p-3">
                    <div className="row text-center">
                        <div className="col-md-4 col-12 mb-4">
                            <img src="media/images/pricing0.svg" alt="Free account" className="img-fluid" style={{ width: "60px" }} />
                            <p className="mt-2">Free account opening</p>
                        </div>

                        <div className="col-md-4 col-12 mb-4">
                            <img src="media/images/pricing0.svg" alt="Free equity delivery" className="img-fluid" style={{ width: "60px" }} />
                            <p className="mt-2">Free equity delivery <br /> and direct mutual funds</p>
                        </div>

                        <div className="col-md-4 col-12 mb-4">
                            <img src="media/images/other-trades.svg" alt="Intraday and F&O" className="img-fluid" style={{ width: "60px" }} />
                            <p className="mt-2">₹20 Intraday and F&amp;O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
