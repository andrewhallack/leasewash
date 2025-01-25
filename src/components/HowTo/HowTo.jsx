import { useState } from 'react';
import './howto.css'

import { QAs } from './QAs'
import img from '../../assets/example_pics/phone.png'

const HowTo = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
        setSelected(index);
    }

    return (
        <div className='howto'>
            <div className='col'>
                <h4><span>How</span> it Works</h4>
                <div className='accordion'>
                    {Object.entries(QAs).map((item, index) => {
                        return (
                            <div className={selected === index ? 'item open' : 'item'} key={index}>
                                <button onClick={() => handleClick(index)}>
                                    <h6>{item[1].question}</h6>
                                </button>
                                <p>{item[1].answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='col'>
                <img src={img} />
            </div>
        </div>
    )
}

export default HowTo