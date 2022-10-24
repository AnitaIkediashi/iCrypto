import React, {useEffect} from 'react'
import { services } from '../data'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {


  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  return (
    <section className="services">
      <div className="container">
        <h3 className='service__heading' data-aos="fade-down" data-aos-delay="150">Services we offer</h3>
        <div className="services__container">
          {
            services.map(({id, title, para}) => {
              return (
                <article key={id} className='card' data-aos="fade-down" data-aos-delay="300">
                  <h4>{title}</h4>
                  <p>{para}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Services