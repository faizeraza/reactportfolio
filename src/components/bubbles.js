import React, { useEffect, useRef } from 'react';

// import './componentprop.css';
function Bubbles({classname,dimension}) {
  const cursorsRef = useRef();
  useEffect(() => {
    const cursor = cursorsRef.current;
    cursor.style.top = `${dimension[0]}%`;
    cursor.style.left = `${dimension[1]}%`;
    cursor.style.display = 'block';
    const moveBubbles = () => {
        cursor.style.width = `10px`;
        cursor.style.height = `10px`;
        cursor.style.top = `${dimension[0]}%`;
        cursor.style.left = `${dimension[1]}%`;
        cursor.style.display = 'block';

        cursor.classList.add('watercolor-effect');

      // Remove the effect after the animation completes
        setTimeout(() => {
          cursor.classList.remove('watercolor-effect');
        }, 500); 
      // cursors[cursors.length - 1].style.top = `${dimensions[0]}%`;
      // cursors[cursors.length - 1].style.left = `${dimensions[1]}%`;
    };

    const handleMouseMove = (e) => {
        cursor.style.width = `5px`;
        cursor.style.height = `5px`;
        cursor.style.top = `${e.pageY - 10}px`;
        cursor.style.left = `${e.pageX - 10}px`;
        cursor.style.display = 'block';
    };

    const handleMouseOut = () => {
        cursor.style.width = `30px`;
        cursor.style.height = `30px`;
        cursor.style.top = `${dimension[0]}%`;
        cursor.style.left = `${dimension[1]}%`;
        cursor.style.transform = 'rotate(360deg)';
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
  }, [dimension]);

  return (
    <div className={classname} ref={(el) => (cursorsRef.current = el)}></div>
  );
}

export default Bubbles;