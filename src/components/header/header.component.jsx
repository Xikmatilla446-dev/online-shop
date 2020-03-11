import React from 'react';


import './header.styles.css';

const HeaderComponent = () => {


    return(


        <div className="contaner-menu">

            <div className="header-code">
                <div className="row-menu">
                    <div className="header-text">
                        <div className="text-header">
                            <h4>МЕЖДУНАРОДЫЙ ЖЕНСКИЙ ДЕНЬ</h4>
                        </div>
                        <div className="number-header">
                            <h4>1919РУБ, 10%, 2599РУБ, -12%,3909 РУБ, -15%</h4>
                        </div>
                        <div className="number-header-code">
                            КОД:RU2020
                        </div>
                    </div>
                </div>
                <div className="brand-and-search">
                    <div className="brand-text">
                        <h1>ZAFUL</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda </p>
                    </div>

                    <div className="search-input">
                        <input type="search" placeholder="толстовка" />
                            <figure>
                                <h4>istoriya</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi consequatur
                                    ducimus ea eos hic
                                    illum impedit ipsum .</p>
                                <hr/>
                                <h4>popule</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            </figure>
                    </div>
                </div>


            </div>
        </div>
)
};

export default HeaderComponent;