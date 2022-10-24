import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Services from '../../components/Services'
import NewsLetter from '../../components/NewsLetter'
import './home.css'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <NewsLetter />
    </>
  )
}

export default Home