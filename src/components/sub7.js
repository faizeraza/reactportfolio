import ShadowEffectsdiv from '../components/shadowEffectsdiv';
import React from 'react';
import githubIcon from '../assets/github-mark.png'; // Adjust the path to your SVG
import hackerrankImg from '../assets/hackerrank.png'; // Adjust the path to your image
import kaggleImg from '../assets/kaggle.png'; // Adjust the path to your image

const SocialLinks = () => {
  return (
    <ShadowEffectsdiv id="sub-7">
      <a href="https://github.com/faizeraza" style={{ width: 'inherit' }}>
        <div className="github">
          <img src={githubIcon} alt="Github" id="section-a" />
          <div id="section-b">Github</div>
        </div>
      </a>
      <div style={{ width: '10px', height: '0px', transformOrigin: '0 0', border: '3px white solid' }}></div>
      <a href="https://linkedin.com/in/faizan-raza-a3a187203" style={{ width: 'inherit' }}>
        <div className="linkedin">
          <svg fill="#000000" id="section-a" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 45.959 45.959" xmlSpace="preserve">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489 c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733 C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123 C8.729,6.477,8.416,7.256,7.847,7.811z"></path>
                  <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path>
                  <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711 c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67 C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797 c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473 c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path>
                </g>
              </g>
            </g>
          </svg>
          <div id="section-b">LinkedIn</div>
        </div>
      </a>
      <div style={{ width: '10px', height: '0px', transformOrigin: '0 0', border: '3px white solid' }}></div>
      <a href="https://www.hackerrank.com/faizeraza4us" style={{ width: 'inherit' }}>
        <div className="hackerrank">
          <img id="section-a" src={hackerrankImg} alt="hackerrank" />
          <div id="section-b">HackerRank</div>
        </div>
      </a>
      <div style={{ width: '10px', height: '0px', transformOrigin: '0 0', border: '3px white solid' }}></div>
      <a href="https://www.kaggle.com/mohammadfaizanraza" style={{ width: 'inherit' }}>
        <div className="kaggle">
          <img id="section-a" src={kaggleImg} alt="kaggle" />
          <div id="section-b">kaggle</div>
        </div>
      </a>
    </ShadowEffectsdiv>
  );
};

export default SocialLinks;
