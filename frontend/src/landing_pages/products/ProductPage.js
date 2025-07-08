import React from 'react'
import { Hero } from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Footer from '../Footer'
import Universe from './Universe'

function ProductPage() {
  return (
    <div className='page-container'>
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <Footer />
    </div>
  )
}

export default ProductPage