import React from 'react';
import ShadowEffectsdiv from '../components/shadowEffectsdiv';

function Profile() {
  return (
    <div className="sub-4">
      <div className="sub-4-1">
        <div className="sub-4-1-1">
          <div className="sub-4-1-1-name">
            HELLO, I&rsquo;M<br />MOHAMMAD FAIZAN RAZA,
          </div>
        </div>
        <div className="about">
          <span>
            a software and data engineer passionate about creating intuitive and efficient software solutions as well as making raw data a valuable asset for clients. I enjoy working out and watching movies/anime.
          </span>
        </div>
        <div>
          <a href="mailto:faizeraza4us@gmail.com">
            <button className="hello-button">Say Hello!</button>
          </a>
          <a href="https://drive.google.com/file/d/1WiupmzM0Nc5uNfEegByPcG3Z6Vtd3xuC/view?usp=sharing">
            <button className="hello-button" style={{margin:'10px'}}>My Resume</button>
          </a>
        </div>
      </div>
        <ShadowEffectsdiv id="sub-6">
              <div className="sectionSGPA">
                <div id="section-1">7.8</div>
                <div id="section-2">SGPA</div>
              </div>
              <div
                style={{
                  width: '10px',
                  height: '0px',
                  transform: 'rotate(90deg)',
                  transformOrigin: '0 0',
                  border: '3px white solid',
                }}
              ></div>
              <div className="sectionSolvedProblems">
                <div id="section-1">250+</div>
                <div id="section-2">Coding Problems Solved</div>
              </div>
              <div
                style={{
                  width: '10px',
                  height: '0px',
                  transform: 'rotate(90deg)',
                  transformOrigin: '0 0',
                  border: '3px white solid',
                }}
              ></div>
              <div className="contributions">
                <div id="section-1">58</div>
                <div id="section-2">Contributions</div>
            </div>
        </ShadowEffectsdiv>
    </div>
  );
}

export default Profile;
