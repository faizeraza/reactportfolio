import './App.css';
import Bubbles from './components/bubbles';
import Nav from './components/nav';
import Profile from './components/profile';
import prof1 from './assets/profile.jpeg'; 
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Bubbles />
      <header className="App-header">
        <div className='block1'>
          <Profile/>
          <img className="shadowz"  src={prof1} alt="Profile" id="image-container"/>     
        </div>
        <Skills/>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
