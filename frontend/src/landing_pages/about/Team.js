import React from 'react'

function Team() {
    return (
        <div className='container p-5 mt-5'>
            <section className='history'>
                <div className='row p-5'>
                    <div className='col-lg-6 col-sm-12 p-3'>
                        <p className='text-muted fs-5'>
                            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                        </p>
                        <p className='text-muted fs-5'>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>

                        <p className='text-muted fs-5'>
                            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>

                    </div>

                    <div className='col-lg-6 col-sm-12 p-3'>
                        <p className='text-muted fs-5'>
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                        </p>

                        <p className='text-muted fs-5'>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                        <p className='text-muted fs-5'>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className='about-peole'>
                <div className='row p-5'>
                    <h2 className='text-center'>People</h2>
                    <div className='col-lg-6 col-sm-12 p-3'>
                        <img src="media\images\nithinKamath.jpg" alt="nitinkamat" class="profile-pic " />
                        <p class="mb-0 fw-bold">Nithin Kamath</p>
                        <small class="text-muted">Founder, CEO</small>
                    </div>

                    <div className='col-lg-6 col-sm-12 p-3'>
                        <p className='text-muted fs-5'>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>

                        <p className='text-muted fs-5'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p className='text-muted fs-5'>Playing basketball is his zen.</p>
                        <p>Connect on <a href="/" style={{ textDecoration: "none" }}>Homepage</a>/
                            <a href="/" style={{ textDecoration: "none" }}>TradingQnA</a>/
                            <a href="/" style={{ textDecoration: "none" }}>Twitter</a></p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Team;