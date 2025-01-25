import './advantages.css'

import img1 from '../../assets/example_pics/complex1.webp'
import img2 from '../../assets/example_pics/wash3.webp'
import img3 from '../../assets/example_pics/wash4.webp'

const Advantages = () => {
  return (
    <div className='advantages'>
        <h4>We're <span>More</span> than Just Clean</h4>
        <div className='grid'>
            <div 
                className='wide'
                style={{
                    backgroundImage: `url(${img1})`
                }}
            >
                <div className='overlay'>
                    <h5>Convenient</h5>
                    <p>A clean car is only a click away from the tenant.</p>
                </div>
            </div>
            <div 
                className='narrow'
                style={{
                    backgroundImage: `url(${img2})`
                }}
            >
                <div className='overlay'>
                    <h5>Economical</h5>
                    <p>We provide a low-cost solution that doesn’t use the tenant’s time or gas and keeps their car paint intact.</p>
                </div>
            </div>
            <div 
                className='narrow'
                style={{
                    backgroundImage: `url(${img3})`
                }}
            >
                <div className='overlay'>
                    <h5>Eco-friendly</h5>
                    <p>We use a biodegradable soap to prevent any possible damage to local plant-life and meet any potential regulations.</p>
                </div>
            </div>
            <div 
                className='wide'
                style={{
                    backgroundImage: `url(${img1})`
                }}
            >
                <div className='overlay'>
                    <h5>Less tenant turnover</h5>
                    <p>A good and unique service like this would reduce tenant turnover as it is a nice, distinct enhancement.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages