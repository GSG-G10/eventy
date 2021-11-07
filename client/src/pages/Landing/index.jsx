import Cover from './Assets/Cover.png';
import TopEvents from './Top-events';
import About from './About';
import { Advertisment1, Advertisment2 } from './Advertisments';
import ExclusiveEvents from './Exclusive-events';
import OnlineEvents from './Online-events';

function Landing() {
  return (
    <div>
      <img src={Cover} style={{ height: '32vh', width: '100%' }}/>
      <TopEvents />
      <About />
      <Advertisment1 />
      <ExclusiveEvents />
      <Advertisment2 />
      <OnlineEvents />
    </div>
  );
}

export default Landing;
