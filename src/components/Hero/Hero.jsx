import './hero.css'
import img1 from '../../assets/example_pics/wash1.webp'
import img2 from '../../assets/example_pics/wash2.webp'

function Hero() {
  return (
    <div className='hero'>
      <div className='col'>
        <h4>A <span>Clean and Shiny Amenity to Elevate</span> your Apartment Complex</h4>
        <p>
          Lease Wash Co. provides convenient car wash solutions for tenants in the comfort of their apartments.
        </p>
        <a className='button filled'>
          Contact Us
        </a>
      </div>
      <div className='col'>
        <div className='img-container'>
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
      <svg className="cs-wave desktop" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 500" xmlns="http://www.w3.org/2000/svg"><path d="M251.463 378.438C126.937 315.555 47.343 253.833 0 209.721V501h1920V0c-356.51 157.88-717.07 312.544-986.268 407.584-269.195 95.039-457.636 84.299-682.269-29.146Z" fill="#fff"></path></svg>
    </div>
  )
}

export default Hero