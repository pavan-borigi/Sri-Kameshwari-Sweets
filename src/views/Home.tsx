import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Products from '../components/Products'
import About from '../components/About'
import Reviews from '../components/Reviews'
import ShopGallery from '../components/ShopGallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Products />
      <About />
      <Reviews />
      <ShopGallery />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
