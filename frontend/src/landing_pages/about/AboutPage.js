import React from 'react'
import Hero from './Hero'
import Team from './Team'
import Footer from '../Footer';
// import Navbar from '../Navbar'

function AboutPage() {
  return (
    // <div>AboutPage</div>
    <div className="page-container">
        {/* <Navbar /> */}
        <Hero />
        <Team />
        <Footer />
    </div>
  )
}

export default AboutPage;