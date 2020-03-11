import React from 'react';
import { FiShoppingCart } from "react-icons/fi";

import download from '../../image/download.png';
import img1 from '../../image/card/1579030641820847339.webp';
import img2 from '../../image/card/f2.webp';
import img3 from '../../image/card/f.webp';



import './navbar.css';



const Navbar = () => {

    return(

        <div className="wrap">


            <header>
                <section>
                    <label htmlFor="toggle-1" className="toggle-menu">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </label>
                    <input type="checkbox" id="toggle-1"/>
                    <nav>
                        <ul>
                            <li><a href="#logo"><i className="icon-home"></i>Home</a></li>
                            <li className="drop"><a href="#about"><i className="icon-user"></i>About</a>
                                <ul className="drop-menu">
                                    <div className="grid-nav">
                                        <div className="section-nav">
                                            <li><a href="#">Web design</a></li>
                                            <li><a href="#">Web aplication</a></li>
                                            <li><a href="#">Mobile aplication</a></li>
                                            <li><a href="#">Web aplication</a></li>
                                            <li><a href="#">Mobile aplication</a></li>
                                        </div>
                                        <div className="section-nav">
                                            <li><a href="#">Web aplication</a></li>
                                            <li><a href="#">Mobile aplication</a></li>
                                            <li><a href="#">Web aplication</a></li>
                                            <li><a href="#">Mobile aplication</a></li>
                                            <li><a href="#">Web design</a></li>
                                        </div>
                                        <div className="section-nav">
                                            <li><a href="#">Web design</a></li>
                                            <li><a href="#">Web aplication</a></li>
                                            <li><a href="#">Mobile aplication</a></li>
                                            <li><a href="#">It adminstration</a></li>
                                            <li><a href="#">Web aplication</a></li>

                                        </div>
                                        <div className="section-nav">
                                            <img src={img1} alt=""/>
                                                <span>Масленица</span>
                                        </div>
                                        <div className="section-nav">
                                            <img src={img2} alt=""/>
                                                <span>Мужские Бестселлеры</span>
                                        </div>
                                        <div className="section-nav">
                                            <img src={img3} alt=""/>
                                                <span>Женский день</span>
                                        </div>
                                    </div>


                                </ul>

                            </li>
                            <li><a href="#portfolio"><i className="icon-thumbs-up-alt"></i>Portfolio</a></li>
                            <li><a href="#services"><i className="icon-gear"></i>Services</a></li>
                            <li><a href="#gallery"><i className="icon-picture"></i>Gallery</a></li>
                            <li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
                            <li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
                            <li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
                            <li><a href="#contact"><i className="icon-phone"></i>Contact</a></li>
                            <FiShoppingCart>12</FiShoppingCart>
                        </ul>
                    </nav>


                </section>
            </header>


            <div className="banner-section">
                <div className="reklama-under-image">
                    <h4>БЕСПЛАНТНАЯ ДОСТАВКА ОТ 1254 РУБ.>></h4> <h4>СКИДКА 18% НА ПЕРВЫЙ ЗАКАЗ>></h4><h4>ПОДПИСЫВАЙСЯ В
                    ВК И ПОЛУЧИ 15%>></h4>
                </div>
                <img src={download} alt=""/>
            </div>
        </div>


)


};

export default Navbar;
