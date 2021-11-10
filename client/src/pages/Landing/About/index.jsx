import Slider from 'react-slick';
import about from '../Assets/about.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

function About() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className='about-section'>
      <div className='about-container'>
        <h2 className='about-welcome'>Welcome to EVENTY !</h2>
        <p className='about-description'>
          Our passion is enabling people in Gaza to easily connect around the
          events they love.
        </p>
        <div className='about-slider-container'>
          <img src={about} width={400} height={180} />
          <Slider
            {...settings}
            style={{
              height: '100%',
              width: '75%',
              backgroundColor: '#c8c9cd',
              color: '#141510',
              fontSize: '1.4rem',
              padding: '6%',
              fontWeight: 'bold',
            }}
          >
            <div>
              <h2 style={{ color: 'rgb(24, 127, 117)' }}>
                  Why we recommend using EVENTY?
              </h2>
            </div>
            <div>
              <p>Do you find its hard to find stuffs to do in your city?</p>
            </div>
            <p>Do you want to start living fully life of experiences?</p>
            <p>Do you want to know different organizations in Gaza?</p>
            <p>
                Do you want to reach more audiunce and promote for your events?
            </p>
          </Slider>

        </div>
        <h2 className='about-h2'>
          Eventy is the best place to build a wide networks around you!
        </h2>
      </div>
    </div>
  );
}

export default About;
