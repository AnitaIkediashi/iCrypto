import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import home1 from '../images/home-1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  return (
    <header className="hero">
      <div className="container hero__container">
        <div className="left">
          <div className="left__contents" data-aos="fade-right" data-aos-delay="150">
            <h2>Welcome to the world of Crypto</h2>
            <p>Where you can get updates on what is happening in the exchange market around the world, and also get up to date news about Crypto Coins.</p>
            <div className="buttons">
              <Link to='/registration' className='btn'>Sign Up</Link>
              <Link to='/login' className='btn btn__primary'>Sign In</Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right__image" data-aos="flip-right" data-aos-delay="600">
            <img src={home1} alt="hero img" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero