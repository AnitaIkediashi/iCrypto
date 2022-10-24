import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import aboutImage from '../images/home-2.png'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  return (
    <section className="about">
      <div className="container about__container">
        <div className="left">
          <div className="left__image" data-aos="fade-right" data-aos-delay="150">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="right__contents" data-aos="fade-left" data-aos-delay="300">
            <h3>Who We Are</h3>
            <p>icrypto is all about getting latest updates on coin news and market exchanges on the internet. there are over 100+ cryptocurrencies all over the world. So if you don't have any idea on what coins to use or the exchange rate or even news latest trends, icrypto got you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About