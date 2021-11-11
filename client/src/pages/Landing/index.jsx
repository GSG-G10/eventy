import Cover from './Assets/Cover.png';
import TopEvents from './Top-events';
import About from './About';
import { Advertisment1, Advertisment2 } from './Advertisments';
import ExclusiveEvents from './Exclusive-events';
import OnlineEvents from './Online-events';

function Landing() {
  return (
    <div>
      <img src={Cover} style={{ height: '20vh', width: '100%',marginTop:'1.5%' }}/>
      <TopEvents />
      <About />
      <ExclusiveEvents />
      <Advertisment2 />
      <OnlineEvents />
      <Advertisment1 />
    </div>
  );
}

export default Landing;
