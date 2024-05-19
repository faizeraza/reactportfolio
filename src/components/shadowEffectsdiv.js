import React, { useEffect, useRef } from 'react';
const ShadowEffectsdiv = ({id,children}) => {
    const shadowsRef = useRef([]);
    const cursorsRef = useRef([]);
    const classname = 'shadowz';
    console.log(cursorsRef);
    useEffect(() => {
        const shadows = shadowsRef.current;
        const cursors = cursorsRef.current;
        console.log(cursors);
        shadows.forEach((shadow, index) => {
          shadow.addEventListener('mousemove', (event) => {
            const x = event.clientX - shadow.offsetLeft;
            const y = event.clientY - shadow.offsetTop;
            
            shadow.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`;
            shadow.style.boxShadow = `${x / 5}px ${y / 5}px 10px rgba(43, 56, 76, 0.09)`;
          });
          shadow.addEventListener('mouseout', () => {
            shadow.style.transform = '';
            shadow.style.boxShadow = '20px 20px 10px rgba(43, 56, 76, 0.09)';
          });
        });
    });
    return (
        <div className={classname} id={id} ref={(el) => (shadowsRef.current[0] = el)}>{children}</div>
    );
};  

export default ShadowEffectsdiv;