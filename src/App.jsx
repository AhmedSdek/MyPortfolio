import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Tech, Works, StarsCanvas } from "./components";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 ' style={{ backgroundColor: 'rgb(5 8 22 / 1)' }}>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar2 />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
