import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../assets/images/Kids Exercise - Jeeva Joy Logo.png'

function Header() {
    useEffect(()=>{
        const menutoggleopener = document.querySelector('.menutoggleopener');
const menutogglecloser = document.querySelector('.menutogglecloser');
const header = document.querySelector(".header");
menutoggleopener.addEventListener('click',() =>{
     document.querySelector('.mobileheaderdrawer').classList.add('active');
     menutoggleopener.style.display = "none"
})
menutogglecloser.addEventListener('click',() =>{
    document.querySelector('.mobileheaderdrawer').classList.remove('active');
    menutoggleopener.style.display = "flex"
})
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
      header.classList.add("is-sticky");
    } else {
      header.classList.remove("is-sticky");
    }
  });  
    })
  return (
    <header className="header">
        <div className="headerinner">
            <div className="desktopheader">
                <div className="header_logo">
                    <NavLink to='/'>
                        <img src={Logo} alt="logo-area"/>
                    </NavLink>
                </div>
                <div className="header_menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/instructors">Instructors</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/membership">Membership</NavLink>
                        </li>
                        <li className="menu-item">
                            <a href="https://www.watch.jeevajoy.com/">Watch</a>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/downloadourapp">Download Our App</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/faqs">FAQs</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mobileheader">
                <div className="header_logo">
                    <NavLink to="/">
                        <img src={Logo} alt="logo-area"/>
                    </NavLink>
                </div>
                <button className="menu-togglebutton menutoggleopener">
                    <div className="hamburger">
                        <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </button>
                <div className="mobileheaderdrawer">
                    <div className="drawerheader">
                        <button className="menu-togglebutton menutogglecloser">
                                <div className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                                </div>
                        </button>
                    </div>
                    <div className="drawercontent">
                        <div>
                        <ul className="menu-list">
                        <li className="menu-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/instructors">Instructors</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/membership">Membership</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink href="https://www.watch.jeevajoy.com/">Watch</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/downloadourapp">Download Our App</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/faqs">FAQs</NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header;