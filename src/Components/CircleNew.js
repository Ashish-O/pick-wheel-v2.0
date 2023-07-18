import React from 'react';
import './CircleNew.css';

export default function Circle() {
  const numItems = 12; // Number of items in the circle
  const rotationAngle = 360 / numItems; // Calculate rotation angle

  const renderItems = () => {
    const items = [];

    for (let i = 0; i < numItems; i++) {
      const isOdd = i % 2 !== 0;
      const backgroundColor = isOdd ? 'white' : 'rgb(228, 129, 129)';

      const rotation = `rotate(${rotationAngle * i}deg) skewY(-60deg)`;

      items.push(
        <li key={i} style={{ transform: rotation }}>
          <div className="text" style={{ backgroundColor }}></div>
        </li>
      );
    }

    return items;
  };

  return <ul className="circle spinning-circle">{renderItems()}</ul>;
}
