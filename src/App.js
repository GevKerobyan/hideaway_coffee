import { useRef } from 'react';
import {About, Hero, Navbar, Find} from './components'
const App = () => {

  const aboutRef = useRef(null)
  const findRef = useRef(null)

  const handleClick = (refType) => {
    console.log('refType =====> ', refType)
    refType.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div className='App'>
      <Navbar aboutRef={aboutRef} findRef={findRef} handleClick={handleClick}/>
      <Hero />
      <About ref={aboutRef}/>
      <Find ref={findRef}/>
    </div>
  );
}

export default App;
