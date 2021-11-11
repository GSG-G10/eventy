import Slider from 'react-slick';
import about from '../Assets/about.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import illustration2 from '../Assets/2.svg';
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
    <div>
      <div>
        <img src={illustration2} width={440} height={300} style={{ position: 'absolute', marginTop: '-1%', right: '0%' }}/>
      </div>
      <div className='about-section' style={{ position: 'relative' }}>
        <div className='about-container'>
          <h2 className='about-welcome'>Welcome to EVENTY !</h2>
          <p className='about-description'>
          Our passion is enabling people in Gaza to easily connect around the
          events they love.
          </p>
          <div className='about-slider-container'>
            <img src={about} width={300} height={182} />
            <Slider
              {...settings}
              style={{
                height: '100%',
                width: '73%',
                backgroundColor: '#ffff',
                color: '#024059',
                fontSize: '1.4rem',
                padding: '6%',
                fontWeight: 'bold',
                fontFamily: 'Paytone One,sans-serif',
              }}
            >
              <div style={{ color: '#D97904' }}>
                <h2 style={{ color: '#D97904' }}>
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
    </div>

  );
}

export default About;
