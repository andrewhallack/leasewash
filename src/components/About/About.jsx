import './about.css'

import img1 from '../../assets/example_pics/complex1.webp'
import img2 from '../../assets/example_pics/wash3.webp'
import img3 from '../../assets/example_pics/wash4.webp'

const About = () => {
  return (
    <div className='about'>
        <div className='row'>
            <div className='col'>
                <h4>
                    <span>Outstanding</span> for Owners and Tenants
                </h4>
                <p>
                    Lease Wash Co. is committed to enhancing the lives of apartment 
                    tenants by offering hand car-washing services right at their doorstep. 
                    We strive to provide unparalleled convenience by delivering high-quality 
                    car care that saves time and effort for busy residents. Our mission 
                    is to create a seamless and enjoyable experience that adds value to
                    tenants’ lives while supporting property owners with a unique and 
                    distinctive amenity.
                </p>
                <div className='buttons'>
                    <a className='button filled'>Contact Us</a>
                    <a className='button empty'>Our Founders</a>
                </div>
                
            </div>
            <div className='col'>
                <div className='grid'>
                    <div className='square'>
                        <img src={img2} />
                    </div>
                    <div className='rectangle'>
                        <img src={img1} />
                    </div>
                    <div className='square'>
                        <img src={img3} />
                    </div>
                </div>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
                <i>72%</i>
                <p>
                    Tenants struggle to find time for car maintenance due to their busy schedules.
                </p>
            </div>
            <div className='card'>
                <i>65%</i>
                <p>
                    Lack of eco-friendly car-washing options available in urban apartment complexes.
                </p>
            </div>
            <div className='card'>
                <i>55%</i>
                <p>
                    Property owners face challenges in differentiating their properties in a competitive market.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About