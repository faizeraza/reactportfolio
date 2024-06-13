import React from 'react';
import windowsImage from '../assets/windows.png';
import aiAssistantGif from '../assets/AIassistant.gif';
import githubAnalyticsImage from '../assets/GitHubDataAnalytics.png';
import workflowImage from '../assets/workflow.png';
import ZenHome from '../assets/ZenHome.jpg';

function Projects({id}) {
  return (
    <div className="Projects" id={id}>
      <span className="section-titles">&gt; Projects<br /></span><br />
      <div className="VA">
        <div className="numbering">
          <span>01. Virtual Assistant</span>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <div className="projectabout">
            This was my attempt to make a voice-based virtual assistant. An AI-powered Desktop based application that can understand natural language and perform various tasks.<br />
            <a href="https://github.com/faizeraza/Jarvis-Virtual-Assistant-.git">
              <button className="hello-button">more.. </button>
            </a>
          </div>
          <div data-glow className="stack">
            <span className='st'>----Stack----</span><br />
            <div className="break"></div>
            <div className="capsule">Python</div>
            <div className="capsule">NLTK</div>
            <div className="break"></div>
            <div className="capsule">Qt Designer</div>
            <div className="capsule">Tensorflow</div>
            <div className="capsule">JS</div>
          </div>
        </div>
        <span>
          <img className="projectimg" src={windowsImage} alt="demo of Virtual Assistant" />
          <img id="Vagif" src={aiAssistantGif} alt="AI assistant gif" />
        </span>
      </div>
      <div className="VA">
        <div className="numbering">
          <span>02. Github Data Analytics</span>
        </div>
        <div style={{ flexDirection: 'column' }}>
          <div className="projectabout">
            In this project, I have built an ETL pipeline which scrapes the trending repositories based on month, week, and day LIVE extract other related information using API and transform it into star schema and load to PostgreSQL then analyzed it over PowerBI.<br />
            <a href="https://github.com/faizeraza/dataengineering-github-data-pipelineline">
              <button className="hello-button">more.. </button>
            </a>
          </div>
          <div data-glow className="stack">
          <span className='st'>----Stack----</span><br />
            <div className="break"></div>
            <div className="capsule">Python</div>
            <div className="capsule">Postgres</div>
            <div className="capsule">Beautifulsoup</div>
            <div className="capsule">PyGithub</div>
            <div className="capsule">PowerBi</div>
          </div>
        </div>
        <span>
          <img className="projectimg" src={githubAnalyticsImage} alt="demo GDA" />
        </span>
      </div>
      <div className="VA">
        <div className="numbering">
          <span>03. G.D.A Deployment</span>
        </div>
        <div>
          <div className="projectabout">
            This Project contains instructions and resources for deploying the GitHub Data Analytics (GDA) project infrastructure on Amazon Web Services (AWS). The GDA project focuses on collecting, analyzing, and visualizing data from GitHub repositories.<br />
            <a href="https://github.com/faizeraza/GitHub-Data-Analytics-Deployment">
              <button className="hello-button">more.. </button>
            </a>
          </div>
          <div data-glow className="stack">
          <span className='st'>----Stack----</span><br />
            <div className="break"></div>
            <div className="capsule">AWS</div>
            <div className="capsule">Docker</div>
            <div className="capsule">aws(RDS)</div>
            <div className="capsule">aws(Lambda)</div>
            <div className="capsule">aws(ECR)</div>
            <div className="capsule">aws(CloudWatch)</div>
          </div>
        </div>
        <span>
          <img className="projectimg" src={workflowImage} alt="demo GDA" />
        </span>
      </div>
      <div className="VA">
        <div className="numbering">
          <span>03. Zen (AI based Stress Analyzer)</span>
        </div>
        <div>
          <div className="projectabout">
          An application that gamifies stress/anxiety/depression management<br/> in an actionable manner to provide relief.<br />
          We wanted to help people with stress/anxiety/depression realise their<br/> ability to take control of their condition and take actionable steps to obtain a positive impact on their mental health.
            <a href="https://github.com/darshandevelopes/Zen/tree/main/Zen">
              <button className="hello-button">more.. </button>
            </a>
          </div>
          <div data-glow className="stack">
          <span className='st'>----Stack----</span><br />
            <div className="break"></div>
            <div className="capsule">React Native</div>
            <div className="capsule">Gemini API</div>
            <div className="capsule">Figma</div>
            <div className="capsule">Android Studio</div>
            <div className="capsule">Genymotion</div>
          </div>
        </div>
        <span>
          <img className="projectimg" src={ZenHome} alt="Home Page" />
        </span>
      </div>
    </div>
  );
}

export default Projects;
