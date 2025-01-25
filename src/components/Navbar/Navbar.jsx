import { useEffect, useState, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { GrHomeRounded, GrCircleInformation, GrCalendar, GrCamera } from "react-icons/gr";

import './navbar.css';
import logo from '../../assets/fakelogo.svg'


function Navbar() {
    const pages = {
        'Home': {
            link: '/',
            icon: <GrHomeRounded className='icon' />
        },
        'About': {
            link: '/#about',
            icon: <GrCircleInformation className='icon' />
        },
        'Services': {
            link: '/',
            icon: <GrCalendar className='icon' />
        },
        'Gallery': {
            link: '/',
            icon: <GrCamera className='icon' />
        }
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
        setActiveLink(link)
        closeMenu();
    };

    useEffect(() => {
        setActiveLink(location.pathname);
        window.scroll(0, 0);
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
                    <RouterLink to='/' onClick={closeMenu} className='logo'>
                        <img src={logo} />
                    </RouterLink>
                    <div className='button-wrapper'>
                        <RouterLink to='/' id='mobile' className='button filled'>
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
                                className={activeLink === data.link ? 'active' : ''}
                            >
                                <RouterLink to={data.link}>
                                    {data.icon}{name}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                    <RouterLink to='/' id='fullscreen' className='button filled'>
                        Contact Us
                    </RouterLink>
                </nav>
            </header>
        </>
    );
};

export default Navbar;