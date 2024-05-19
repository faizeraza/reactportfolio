import React, { useEffect, useRef } from 'react';
import prof1 from '../assets/profile.jpeg'; 

const InteractiveElements = () => {
  const shadowsRef = useRef([]);
  const cursorsRef = useRef([]);
  console.log(cursorsRef);

  const dimensions = [
    [50, 50], [15, 30], [10, 10], [5, 95], [0, 65], [50, 95],
    [90, 90], [60, 40], [30, 15], [20, 10], [95, 20], [40, 0],
    [95, 95], [50, 90]
  ];

  useEffect(() => {
    const shadows = shadowsRef.current;
    const cursors = cursorsRef.current;

    const moveBubbles = () => {
      cursors.forEach((cursor, i) => {
        cursor.style.width = `10px`;
        cursor.style.height = `10px`;
        cursor.style.top = `${dimensions[(i + 1) % dimensions.length][0]}%`;
        cursor.style.left = `${dimensions[(i + 1) % dimensions.length][1]}%`;
        cursor.style.display = 'block';
      });
      cursors[cursors.length - 1].style.top = `${dimensions[0][0]}%`;
      cursors[cursors.length - 1].style.left = `${dimensions[0][1]}%`;
    };

    const handleMouseMove = (e) => {
      cursors.forEach((cursor) => {
        cursor.style.width = `5px`;
        cursor.style.height = `5px`;
        cursor.style.top = `${e.pageY - 10}px`;
        cursor.style.left = `${e.pageX - 10}px`;
        cursor.style.display = 'block';
      });
    };

    const handleMouseOut = () => {
      cursors.forEach((cursor, i) => {
        cursor.style.width = `30px`;
        cursor.style.height = `30px`;
        cursor.style.top = `${dimensions[i][0]}%`;
        cursor.style.left = `${dimensions[i][1]}%`;
        cursor.style.transform = 'rotate(360deg)';
      });
    };

    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };

    document.addEventListener('scroll', moveBubbles);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.removeEventListener('scroll', moveBubbles);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, [dimensions]);

  return (
    <div>
      <div className="shadowz" ref={(el) => (shadowsRef.current[0] = el)}></div>
      <img className="shadowz" ref={(el) => (shadowsRef.current[1] = el)} src={prof1} alt="Profile" id="image-container"/> 
      {/* Add other shadow elements similarly */}
      <div className="cursor" ref={(el) => (cursorsRef.current[0] = el)}></div>
      <div className="cursor" ref={(el) => (cursorsRef.current[1] = el)}></div>
      <div className="cursor" ref={(el) => (cursorsRef.current[2] = el)}></div>
      {/* Add other cursor elements similarly */}
    </div>
  );
};

export default InteractiveElements;
