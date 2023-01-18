import React from 'react'

const Services = () => {
  return (
    <section className="section services" id="services">
    <div className='section-title'>
        <h2>Our<span>Services</span></h2>
    </div>
    <div className="section-center services-center">
        <article className='service'>
            <span className='service-icon'><i  className="fas fa-wallet fa-fw"></i></span>
            <div className='service-info'>
                <h4 className='service-title'>Saving Money</h4>
                <p className='service-text'>We offer our services at a very genuine rate</p>
            </div>
        </article>

        <article className='service'>
        <span className='service-icon'><i  className="fas fa-tree fa-fw"></i></span>
        <div  className="service-info">
      <h4  className="service-title">endless hiking</h4>
      <p  className="service-text">
        Lots of adventure
      </p>
    </div>
  </article>
  <article  className="service">
    <span  className="service-icon"><i  className="fas fa-socks fa-fw"></i></span>
    <div  className="service-info">
      <h4  className="service-title">amazing comfort</h4>
      <p  className="service-text">
        We are number 1 at hospitality

      </p>
    </div>
  </article>
    </div>

    </section>
  )
}

export default Services

