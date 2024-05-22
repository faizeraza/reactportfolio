import React, { useEffect, useRef } from 'react';
const ShadowEffectsdiv = ({id,children}) => {
    const shadowsRef = useRef([]);
    const classname = 'shadowz';
    useEffect(() => {
        const shadows = shadowsRef.current;
        shadows.forEach((shadow, index) => {
          shadow.addEventListener('mousemove', (event) => {
            const x = event.clientX - shadow.offsetLeft;
            const y = event.clientY - shadow.offsetTop;
            
            shadow.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`;
            shadow.style.boxShadow = `${x / 5}px ${y / 5}px 10px rgba(54, 54, 54, 0.5)`;
          });
          shadow.addEventListener('mouseout', () => {
            shadow.style.transform = '';
            shadow.style.boxShadow = '20px 20px 10px rgba(54, 54, 54, 0.5)';
          });
        });
    });
    return (
        <div className={classname} id={id} ref={(el) => (shadowsRef.current[0] = el)}>{children}</div>
    );
};  

export default ShadowEffectsdiv;