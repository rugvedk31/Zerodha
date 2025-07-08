import React from 'react'

const Universe = () => {
    return (
        <div className='container p-5'>
            <div className='subContainer p-5'>
                <div className='row p-5'>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/zerodhaFundhouse.png" alt="zerodhafounder" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/tijori.svg" alt="tijoriLogo" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className='subContainer'>
                <div className='row p-5'>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/streakLogo.png" alt="streakLogo" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                        </a>
                    </div>

                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center text-center flex-column align-items-center mb-4'>
                        <a href="/">
                            <img src="media/images/dittoLogo.png" alt="dittoLogo" className='universe-pics img-fluid mb-3' style={{ maxHeight: "60px" }} />
                            <p className='text-muted'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Universe
