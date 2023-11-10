import React, { useState } from 'react'

import './products.css'
import planeImg from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function Products() {
    const [parent] = useAutoAnimate()

const [ MenuProducts, setMenuProducts ]= useState(ProductsData);
const filter =(type)=>{
    setMenuProducts(ProductsData.filter((Product)=>Product.type === type))
}

  return (
    <div className='productContainer'>
    <img src={planeImg} alt=''/>
    <h1>Our Featured Products</h1>
    <div className='Products'>
        <ul className='productMenu'>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=> filter("Skin therapy of glow care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
        <div className='productMenuList'ref={parent}>
            {
                MenuProducts.map((Product,i)=>(
                    <div className='Product'>
                        <div className='left-s'>
                            <div className='name'>
                                <span>{Product.name}</span>
                                <span>{Product.details}</span>
                            </div>
                            <span>{Product.price}$</span>
                            <div>Show Now</div>

                        </div>
                        <img src={Product.img} alt='' className='img-P'/>
                    
                        </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

