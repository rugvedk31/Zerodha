import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <img src="media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>

                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li>Stocks & IPOS</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media\images\pressLogos.png" alt="pressLogo"style={{width : "90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;