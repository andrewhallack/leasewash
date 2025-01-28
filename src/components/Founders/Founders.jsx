import './founders.css'

import img1 from '../../assets/example_pics/najib.png'
import img2 from '../../assets/example_pics/andrew.png'

const Founders = () => {
  return (
    <div className='founders' id='founders'>
        <div className='top-triangle' />
        <div className='col'>
            <div className='img-container'>
                <img src={img1} />
                <img src={img2} />
            </div>
        </div>
        <div className='col'>
            <h4>Two <span>Friends</span> with an <span>Idea</span></h4>
            <p>
                Najib runs a car wash and learned something from his experience: people want a clean car and they want convenience even more. A great car wash can still lose customers to a busy schedule, so it only makes sense that the same level of professional care of a car wash could be brought to an apartment complex.
            </p>
            <p>
                Andrew got involved in this service after reflecting on his own needs. He tends to have a packed schedule, juggling a 9-to-5 job, errands, figuring out how to get his daily exercise, and managing a social life. When realizing that others go through the same, he couldn’t say no to the opportunity to get involved with Lease Wash Co. It became clear that washing a car no longer needs to be an afterthought, but something that is already taken care of.
            </p>
        </div>
        <div className='bottom-triangle' />
    </div>
  )
}

export default Founders