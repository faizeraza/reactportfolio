import './App.css';
import Nav from './components/nav';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import ShadowEffectsimg from './components/shadowEffectsimg';
import SocialLinks from './components/sub7';
import Bubbles from './components/bubbles';
import DarkMode from './components/DarkMode';
import ScrollButton from './components/ScrollButton'; 
function App() {

  let classname='cursor';
  return (
    <div className="App">
      <Bubbles classname={classname} dimension={[50, 50]}></Bubbles>
      <Bubbles classname={classname} dimension={[10,30]}></Bubbles>
      <Bubbles classname={classname} dimension={[10,10]}></Bubbles>
      <Bubbles classname={classname} dimension={[10,95]}></Bubbles>
      <Bubbles classname={classname} dimension={[10,65]}></Bubbles>
      <Bubbles classname={classname} dimension={[50,95]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[90,90]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[50,60]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[30,10]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[20,10]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[95,10]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[75,10]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[95,95]}></Bubbles>
      <Bubbles classname={"cursor1"} dimension={[50,90]}></Bubbles>
      <div className='main-container'>
        <div className='block1' id={'home'}>
          <Nav/>
          <Profile/>
          <ShadowEffectsimg/>
          <SocialLinks/>  
          <DarkMode/>
        </div>
        <Skills id={'skills'}/>
        <Projects id={'projects'}/>
        <ScrollButton/>
      </div>
    </div>
  );
}

export default App;
