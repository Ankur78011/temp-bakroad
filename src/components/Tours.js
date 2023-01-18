import React from 'react'
import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';
import tour5 from '../images/tour-5.jpeg';
import tour6 from '../images/tour-6.jpeg';

const Tours = () => {
  return (
    <section  className="section" id="tours">
<div  className="section-title">
  <h2>featured <span>tours</span></h2>
</div>

<div  className="section-center featured-center">
  <article  className="tour-card">
    <div  className="tour-img-container">
      <img src={tour1}  className="tour-img" alt="" />
     
    </div>
    <div  className="tour-info">
      <div  className="tour-title">
        <h4>Tibet Adventure</h4>
      </div>
      <p>
      Tibet, on the lofty Tibetan Plateau on the northern side of the Himalayas, is an autonomous region of China. It's nicknamed the “Roof of the World” for its towering peaks. It shares Mt. Everest with Nepal.
      </p>
      <div  className="tour-footer">
        <p>
          <span><i  className="fas fa-map"></i></span> china
        </p>
        <p>6 days</p>
        
      </div>
    </div>
  </article>

  <article  className="tour-card">
    <div  className="tour-img-container">
      <img src={tour2}  className="tour-img" alt="" />
      
    </div>
    <div  className="tour-info">
      <h4>best of java</h4>
      <p>
      Java, lying between Sumatra and Bali, is a volcano-dotted island that’s at the geographic and economic center of Indonesia, and home to more than half its people. Java’s largest city is modern, sprawling Jakarta, the nation’s capital
      </p>
      <div  className="tour-footer">
        <p>
          <span><i  className="fas fa-map"></i></span> indonesia
        </p>
        <p>11 days</p>
        
      </div>
    </div>
  </article>

  <article  className="tour-card">
    <div  className="tour-img-container">
      <img src={tour3}  className="tour-img" alt="" />
     
    </div>
    <div  className="tour-info">
      <h4>explore hong kong</h4>
      <p>
      Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a city and special administrative region of China on the eastern Pearl River Delta in South China.
      </p>
      <div  className="tour-footer">
        <p>
          <span><i  className="fas fa-map"></i></span> hong kong
        </p>
        <p>8 days</p>
        
      </div>
    </div>
  </article>

  <article  className="tour-card">
    <div  className="tour-img-container">
      <img src={tour4}  className="tour-img" alt="" />
     
    </div>
    <div  className="tour-info">
      <h4>kenya highlights</h4>
      <p>
      Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands. It's also home to wildlife like lions, elephants and rhinos. 
      </p>
      <div  className="tour-footer">
        <p>
          <span><i  className="fas fa-map"></i></span> kenya
        </p>
        <p>20 days</p>
       
      </div>
    </div>
  </article>
</div>
</section>
  )
}

export default Tours

