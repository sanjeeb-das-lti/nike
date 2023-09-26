import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

    return (
        <header className='padding-x py-8 w-full absolute z-10'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) =>
                        <li key={item.label} className='hover:underline'>
                            <a href={item.href} className='info-text'>
                                {item.label}
                            </a>
                        </li>)}
                </ul>
                <div className='hidden max-lg:block cursor-pointer'>
                    <img src={hamburger} alt="menu" width={25} height={25} />
                </div>
            </nav>
        </header>
    )
};

export default Nav;