import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-sm-12 p-5 mt-5 text-center'>
                    <img
                        src="media/images/education.svg"
                        alt="Education"
                        className="img-fluid"
                    />
                </div>

                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>Free and open market education</h1>
                    <p className='mt-3'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="/" className="d-block mb-3 text-decoration-none">
                        Varsity <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <p>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="/" className="d-block text-decoration-none">
                        TradingQ&A <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
