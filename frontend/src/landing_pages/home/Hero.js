import React from 'react'

function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center justify-content-center'>
                <div className="col-12">
                    <img
                        src="media/images/homehero.png"
                        alt="Hero"
                        className='mb-5 img-fluid mt-3'
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                <div className="col-12">
                    <h1 className='mt-3'>Invest in everything</h1>
                    <p className="px-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                </div>

                <div className="col-12">
                    <button
                        className='p-2 btn btn-primary fs-5 mb-5'
                        style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
