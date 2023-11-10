import React from 'react'
import  './Header.css'
import Logo from '../../assets/logo.png'
// import { CgShoppingbag } from "../sanity/node_modules/react-icons/ai"
export default function Header(){
    return(
        <>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt=''/>
                <span>amajon</span>
            </div>
            <div className='right'>
                <div className='menu'>
                    <ul className='menu'>
                        <li>Collections</li>
                        <li>brands</li>
                        <li>New</li>
                        <li>sales</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <input type="text" className='search'/>
                   {/* <CgShoppingbag  /> */}
            </div>
        </div>
        </>
    )
}