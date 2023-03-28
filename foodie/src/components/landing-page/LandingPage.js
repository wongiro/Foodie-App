import React from 'react'
import { SlArrowRight } from 'react-icons/sl'

import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-page'>
        <h3>Foodie!</h3>
        <p>Hand pick your meal from here</p>
        <div className='button-btn'>
            <button> <SlArrowRight/> </button>
        </div>
    </div>
  )
}

export default LandingPage