import { useEffect, useState, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { GrHomeRounded, GrCircleInformation, GrCalendar, GrCamera } from "react-icons/gr";

import './navbar.css';
import logo from '../../assets/example_pics/logo.png'


function Navbar() {
    const pages = {
        'Home': {
            link: '/#home',
        },
        'About': {
            link: '/#about',
        },
        'Services': {
            link: '/#services',
        },
    };

    const location = useLocation();

    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const navRef = useRef(null);

    const closeMenu = () => {
        setClick(false);
    };

    const handleClick = () => {
        setClick(!click);
    };
    
    const handleLink = (link) => {
        setActiveLink(link);
        closeMenu();

        if (link.startsWith('/#')) {
            const id = link.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    useEffect(() => {    
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [click]);

    return (
        <>
            <header className='navbar'>
                <nav ref={navRef}>
                    <RouterLink to='/#home' onClick={() => handleLink('/#home')} className='logo'>
                        <img src={logo} />
                    </RouterLink>
                    <div className='button-wrapper'>
                        <RouterLink to='/#contact' id='mobile' className='button filled' onClick={() => handleLink("/#contact")}>
                            Contact Us
                        </RouterLink>
                        <div className='hamburger' onClick={handleClick}>
                            <div className={click ? 'hamburger-icon active' : 'hamburger-icon'} />
                        </div>
                    </div>
                    <ul className={click ? "active" : ""}>
                        {Object.entries(pages).map(([name, data]) => (
                            <li
                                key={name}
                                onClick={() => handleLink(data.link)}
                            >
                                <RouterLink to={data.link} className={activeLink === data.link ? 'active' : ''}>
                                    {data.icon}{name}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                    <RouterLink to='/#contact' id='fullscreen' className='button filled' onClick={() => handleLink("/#contact")}>
                        Contact Us
                    </RouterLink>
                </nav>
            </header>
        </>
    );
};

export default Navbar;