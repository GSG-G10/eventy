import TopEvents from './Top-events';
import About from './About';
import { Advertisment1, Advertisment2 } from './Advertisments';
import ExclusiveEvents from './Exclusive-events';
import OnlineEvents from './Online-events';
import './style.css';

function Landing() {
  return (
    <div>
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
