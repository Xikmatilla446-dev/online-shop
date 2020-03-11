import React from 'react';

import CustomButton from '../custom-button/custom-button.component'
import { FaHeart } from "react-icons/fa";

import cart1 from '../../image/card/1577122580706514812.webp'
import cart2 from '../../image/card/1577122580555646636.webp'
import DataCard from './data';


import './cart-item.styles.css';


const CartItem = () => {

    return(


        <div className="wrap-cart">
            <div className="row-card">
                {DataCard.map((item, index) => (
                    <div
                        key={index}
                        className="col-card">
                    <div className="section">
                        <div className="col-img-1"><img src={item.image1} alt=""/></div>
                        <div className="cart-button">
                            <CustomButton>{item.button}</CustomButton>
                        </div>
                        <div className="col-img-2"><img src={item.image2} alt=""/></div>
                    </div>

                        <div className="figure-section">
                            <div className="price-card"><span>1 068 руб. РРЦ </span><span>1 592 руб.</span><span><FaHeart/></span><span>{item.user} </span></div>

                                <div className="color-card">
                                    <span style={{backgroundImage:"url(https://des.zafcdn.com/uploads/pdm-product-pic/Clothing/2018/09/10/source-img/276702418_2_1536563893.png)"}}/>
                                    <span style={{backgroundImage:"url(https://des.zafcdn.com/uploads/pdm-product-pic/Clothing/2018/09/10/source-img/276702418_2_1536563893.png)"}}/>
                                    <span style={{backgroundImage:"url(https://des.zafcdn.com/uploads/pdm-product-pic/Clothing/2018/09/10/source-img/276702418_2_1536563893.png)"}}/>
                                    <span style={{backgroundImage:"url(https://des.zafcdn.com/uploads/pdm-product-pic/Clothing/2018/08/09/source-img/276702423_2_1533805398.png)"}}/>

                        </div>

                        </div>
                </div>
                ))}


            </div>
        </div>
    )

};

export default CartItem;