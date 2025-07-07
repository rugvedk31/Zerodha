import React from 'react'

function Footer() {
    return (
        <div className='container-fluid py-4' style={{ backgroundColor: "#f5f5f5" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-3 mb-4'>
                        <img src="media/images/logo.svg" alt="logo" className='img-fluid mb-2' style={{ maxWidth: "150px" }} />
                        <p className="small">&copy; 2010 - 2025, Zerodha Broking Ltd.<br />All rights reserved.</p>
                    </div>

                    <div className='col-md-6 col-lg-2 mb-4'>
                        <p className="small fw-bold">Account</p>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Open demat account</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Minor demat account</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>NRI demat account</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Commodity</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Dematerialisation</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Fund transfer</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>MTF</a>
                        <a href="/" className='d-block text-dark 'style={{textDecoration:"none"}}>Referral program</a>
                    </div>

                    <div className='col-md-6 col-lg-2 mb-4'>
                        <p className="small fw-bold">Support</p>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Contact us</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Support portal</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>How to file a complaint?</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Status of your complaints</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Bulletin</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Circular</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Z-Connect blog</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Downloads</a>
                    </div>

                    <div className='col-md-6 col-lg-2 mb-4'>
                        <p className="small fw-bold">Company</p>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>About</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Philosophy</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Press & media</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Careers</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Zerodha.tech</a>
                        <a href="/" className='d-block text-dark' style={{textDecoration:"none"}}>Open source</a>
                    </div>

                    <div className='col-md-6 col-lg-3 mb-4'>
                        <p className="small fw-bold">Quick links</p>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Upcoming IPOs</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Brokerage charges</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Market holidays</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Economic calendar</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Calculators</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Markets</a>
                        <a href="/" className='d-block text-dark ' style={{textDecoration:"none"}}>Sectors</a>
                    </div>
                </div>

                <p className='text-muted small mt-5'>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ and​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="/" className='text-decoration-none'>complaints@zerodha.com</a>, for DP related to <a href="#" className='text-decoration-none'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p><br />

                <p className='text-muted small'>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p><br />

                <p className='text-muted small'>
                    <a href="/" className='text-decoration-none'>Smart Online Dispute Resolution</a> | <a href="/" className='text-decoration-none'>Grievances Redressal Mechanism</a>
                </p><br />

                <p className='text-muted small'>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p><br />

                <p className='text-muted small'>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p><br />

                <p className='text-muted small'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>
            </div>
        </div>
    );
}

export default Footer;
