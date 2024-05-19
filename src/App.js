import './App.css';
import Bubbles from './components/bubbles';
import Nav from './components/nav';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import ShadowEffectsimg from './components/shadowEffectsimg';
import SocialLinks from './components/sub7';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Bubbles />
      <header className="App-header">
        <div className='block1'>
          <Profile/>
          <ShadowEffectsimg/>
          <SocialLinks/>  
        </div>
        <Skills/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
