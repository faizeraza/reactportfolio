import React, { useState, useEffect, useRef } from 'react';
import './SpiderMan.css';
import spidermanGif from '../assets/spider.gif';

const SpiderMan = () => {
  const [position, setPosition] = useState({ top: 190, left: 300 });
  const [isThrowing, setIsThrowing] = useState(false);
  const [webStyle, setWebStyle] = useState({});
  const [rotation, setRotation] = useState(0);
  const spidermanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (spidermanRef.current) {
        const spiderRect = spidermanRef.current.getBoundingClientRect();
        const spiderCenterX = spiderRect.left + spiderRect.width / 2;
        const spiderCenterY = spiderRect.top + spiderRect.height / 2;
        const angle = Math.atan2(event.clientY - spiderCenterY, event.clientX - spiderCenterX) * (180 / Math.PI);
        setRotation(angle - 80); // Adjust angle as needed
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const spiderCenterX = position.left ; 
    const spiderCenterY = position.top ; 
    const deltaX = clientX - spiderCenterX;
    const deltaY = clientY - spiderCenterY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setWebStyle({
      width: `${distance}px`,
      transform: `rotate(${angle}deg)`,
      top: `${spiderCenterY}px`,
      left: `${spiderCenterX}px`,
    });

    setIsThrowing(true);

    setTimeout(() => {
      setPosition({ top: clientY, left: clientX }); 
      setIsThrowing(false);
    }, 1000); 
  };

  return (
    <div className="spiderman-container" onClick={handleClick}>
      <div
        ref={spidermanRef}
        className={`spiderman ${isThrowing ? 'throwing' : ''}`}
        style={{ top: `${position.top}px`, left: `${position.left}px`, transform: `rotate(${rotation}deg)` }}
      >
        <img src={spidermanGif} className="spin" alt="Spider-Man" />
        {isThrowing && (
          <div
            className="web"
            style={webStyle}
          />
        )}
      </div>
    </div>
  );
};

export default SpiderMan;
