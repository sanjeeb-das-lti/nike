import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav2 = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 max-container'>
                {/* <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="bonfire"></ion-icon>
                    </span>
                    Nike
                </div> */}
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <div onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
                    <ion-icon name={showMobileMenu ? "close" : "menu"}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
                left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
                ${showMobileMenu ? "top-20 opacity-100" : "top-[-320px]"}`}>
                    {navLinks.map((item) =>
                        <li key={item.label} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={item.href} className='hover:text-gray-800 hover:underline duration-500 info-text'>{item.label}</a>
                        </li>)}
                </ul>
            </nav>
        </div>
    )
}

export default Nav2