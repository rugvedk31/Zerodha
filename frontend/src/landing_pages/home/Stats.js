import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>

                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>
                    
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>

                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                <div className='col-lg-6 col-sm-12 p-3 text-center'>
                    <img
                        src="media/images/ecosystem.png"
                        alt="ecosystem"
                        className='img-fluid mb-4'
                        style={{ width: "90%" }}
                    />

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
                        <a href="/" className='text-decoration-none'>
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href="/" className='text-decoration-none'>
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
