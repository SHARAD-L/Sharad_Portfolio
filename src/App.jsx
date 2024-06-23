import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Contact, Projects, Navbar, About, Hero } from "./assets/components";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div>
          <div id="home" className='relative z-10 home'>
            <Hero />
          </div>
          <div id="skills" className='skills relative z-30 bg-primary mt-[-2px]'>
            <About />
          </div>
          <div id="project" className='relative z-30 projects bg-primary'>
            <Projects />
          </div>
          <div id="contact" className='relative z-20 contact bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
