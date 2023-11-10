import React from "react";
import './Hero.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill}  from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs' 

export default function Hero(){
    return(
        <>
        <div className="container">
            {/* left side */}
            <div className="h-sides">
                <span className="text1">scrin protection cream</span>
                <div className="text2">
                    <span>Trendy Collection </span>
                    <span>seedily say has suitable disposal and 
                        boy.Exercise joy man children
                        rejoiced  </span>
                </div>

            </div>
            {/* middle side */}
            <div className="wrapper">
                <div className="blueCircle">

                </div>
                <img src={HeroImg} alt="" width={600}/>
                <div className="cart2">
                    <RiShoppingBagFill/>
                
                 <div className="signUp">
                    <span >Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                 </div>
                </div>
            </div>

            {/* right side */}
            <div className="h-sides">
                <div className="traffic">
                    <span>1.5m </span>
                    <span>Monthly traffic </span>
                </div>
                <div className="customers">
                    <span>100k </span>
                    <span>Happy customers</span>
                </div>
            </div>

        </div>
        </>
    )
}