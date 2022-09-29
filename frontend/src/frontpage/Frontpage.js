import React from 'react'
import Intro from './sections/intro/Intro'
import Features from './sections/features/Features'

function Frontpage() {
  return (
    <div className='frontBody'>
        
        
        <div className='frontBodyIntro'>
        <Intro></Intro>
        </div>
        <div className='frontBodyFeatures'>
        <Features></Features>
        </div>
    </div>
  )
}

export default Frontpage