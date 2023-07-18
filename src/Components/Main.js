import React, { useState } from 'react'
import './Main.css'
import CircleAnimation from './CircleAnimation'

export default function Main() {

  const [showListSection, setShowListSection] = useState(true);

  return (
    <div className='main-section'>
      <div className='section-loader'>
        <CircleAnimation />
      </div>
      {showListSection && <section className='section-main'>
      </section>}

      <div className='winner-section'></div>
    </div>
  )
}
