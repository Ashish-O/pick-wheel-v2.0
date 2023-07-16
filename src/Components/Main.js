import React, { useState } from 'react'
import './Main.css'
import Circle from './Circle'

export default function Main() {

  const [showListSection, setShowListSection] = useState(true);

  return (
    <div className='main-section'>
      <div className='section-loader'>
        <Circle />
      </div>
      {showListSection && <section className='section-main'>
      </section>}
    </div>
  )
}
