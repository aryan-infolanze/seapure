import React from 'react'
import HeroSection from './HeroSection'
import CompanyOverview from './CompanyOverview'
import ProductsSection from './ProductsSection'
// import BrandsSection from './BrandsSection'
import RoPartsSection from './RoPartsSection'
import ProductProfile from './ProductProfile'
import About from './About'
import ContactUs from './ContactUs'


function Home() {
  return (
    <>
        <HeroSection id="home" />
        <About id="about" />
        <CompanyOverview  id="company" />
        <ProductProfile />
        <RoPartsSection id="products" />
        <ProductsSection/>
        <ContactUs/>
        {/* <BrandsSection/> */}
    
    </>
  )
}

export default Home