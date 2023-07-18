import React, { useState } from 'react';
import './CircleAnimation.css';

export default function Circle() {
  const [isAnimationPaused, setAnimationPaused] = useState(false);

  const toggleAnimation = () => {
    setAnimationPaused(!isAnimationPaused);
  };

  return (
    <div>
      <ul className={`circle spinning-circle ${isAnimationPaused ? 'paused' : ''}`}>
        {[...Array(12)].map((_, index) => (
          <li key={index} style={{ transform: `rotate(${30 * index}deg) skewY(-60deg)` }}>
            <div className={`text ${index % 2 === 0 ? 'even' : 'odd'}`}></div>
          </li>
        ))}
      </ul>
      <button className='button-circle' onClick={toggleAnimation}>
        {isAnimationPaused ? 'Start' : 'Stop'}
      </button>
    </div>
  );
}
