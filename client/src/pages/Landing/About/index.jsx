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
    <div
      style={{
        color: '#024059',
        marginTop: '3%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '75%',
        }}
      >
        <h2 style={{ padding: '1%' }}>Welcome to EVENTY !</h2>
        <p
          style={{
            padding: '1%',
            fontWeight: 'lighter',
            letterSpacing: '1px',
          }}
        >
          Our passion is enabling people in Gaza to easily connect around the
          events they love.
        </p>
        <div
          className='about'
          style={{
            width: '100%',
            display: 'flex',
            borderRadius: '22px',
            boxShadow: '0 4px 3px 22 #A59A9A',
            color: '#D97904',
          }}
        >
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
            <div>
              <h2 style={{ color: '#D97904' }}>
                  Why we recommend using EVENTY?
              </h2>
            </div>
            <div>
              <p>Do you find its hard to find stuffs to do in your city?</p>
            </div>
            <p >Do you want to start living fully life of experiences?</p>
            <p>Do you want to know different organizations in Gaza?</p>
            <p>
                Do you want to reach more audiunce and promote for your events?
            </p>
          </Slider>

        </div>
        <h2 style={{ padding: '1%', letterSpacing: '1px', marginTop: '3%' }}>
          Eventy is the best place to build a wide networks around you!
        </h2>
      </div>
    </div>
  );
}

export default About;
