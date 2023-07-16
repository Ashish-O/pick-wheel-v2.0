import React, { useState, useRef, useEffect } from 'react';
import './Circle.css'

const CircleAnimation = () => {
  const circleRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  let animation;

  const stopAnimation = () => {
    cancelAnimationFrame(animation);
  };

  const animateCircle = () => {
    setRotation(getRotation());
    animation = requestAnimationFrame(animateCircle);
  };

  const getRotation = () => {
    const transform = window.getComputedStyle(circleRef.current).getPropertyValue("transform");
    const matrix = transform.match(/^matrix\(([^(]*)\)$/)[1].split(", ");
    const angle = Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI));
    return angle < 0 ? angle + 360 : angle;
  };

  useEffect(() => {
    animateCircle();
    return () => cancelAnimationFrame(animation);
  }, [animation]);

  return (
    <div className="container">
      <div ref={circleRef} className="circle" style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}></div>
      <button onClick={stopAnimation}>Stop</button>
    </div>
  );
};

export default CircleAnimation;
