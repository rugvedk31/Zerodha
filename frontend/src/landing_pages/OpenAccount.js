import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container'>
            <div className='row justify-content-center text-center p-4'>
                <div className='col-12'>
                    <h1 className='mb-3 fs-2'>Open a Zerodha account</h1>
                    <p className='text-muted'>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                </div>

                <div className='col-12 d-flex justify-content-center'>
                    <button
                        className='p-2 btn btn-primary fs-5 mb-5'
                        style={{ width: "100%", maxWidth: "250px" }}
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
