import React from 'react'
import './virtual.css'
import ReactCompareImage from 'react-compare-image'

import shadeimg from '../../assets/shade.png'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
export default function Virtual() {
  return (
    <div className='virtual'>
      <div className='left'>
        <spna> Virtual try-on</spna>
        <spna> Never Buy the Wrong shade Again</spna>
        <spna>Try Next </spna>
        <img src={shadeimg} alt=''/>

      </div>
      {/* right */}
      <div className='right'>
        <div className='rifghtWrapper'>
          <ReactCompareImage leftImage={Before} rightImage={After}/>
        </div>
       
      </div>


    </div>
  )
}

 