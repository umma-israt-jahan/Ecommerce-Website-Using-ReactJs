import React from 'react'
import  './testimonials.css'
import testimonialsHeroImg from '../../assets/testimonialHero.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TestimonialsData } from '../../data/testimonials';



export default function Testmonial (){
    
   
  return (
    <div className='Testmonials'>
        <div className='Wrrapper'>
            <div className='Container'>
                <span>Top Rated</span>
                <span>Seedily say has suitable disposal and
                boy. Exercise joy man children rejoiced.
                </span>
            </div>    
       
                <img className='img' src={testimonialsHeroImg} alt=''/>
            <div className='Container'>
                <span>100k</span>
                <span>Happy Customers with us</span>
            </div>
        </div>
        <div className='review'>Reviews</div>
        <Carousel autoPlay>
        <div className='carosel'>
            <swiper slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className='tCarosel'
            >
            
            </swiper>

            {
                TestimonialsData.map
            }
            <img alt="" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.howtogame.net%2Fguides%2Fhow-tall-is-link-tears-of-the-kingdom%2F&psig=AOvVaw33dla8QlP6t607g1ko4cV-&ust=1699510888203000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC22efhs4IDFQAAAAAdAAAAABAE" />
            <p className="legend">Legend 1</p>
            <h1>dfghj</h1>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
       
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
            <p className="legend">Legend 14</p>

        </div>
    </Carousel>

       
    </div>
  )
}

