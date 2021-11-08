import Slider from 'react-slick';
import about from '../Assets/about.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        color: '#f0f0f0',
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '75%',
        }}
      >
        <h2 style={{ padding: '1.5%' }}>Welcome to EVENTY !</h2>
        <p
          style={{
            padding: '1.5%',
            fontWeight: 'lighter',
            letterSpacing: '1px',
          }}
        >
          Our passion is enabling people in Gaza to easily connect around the
          events they love.
        </p>
        <div
          style={{
            padding: '1.5%',
            display: 'flex',
            width: '100%',
          }}
        >
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
        <h2 style={{ padding: '2%', letterSpacing: '1px' }}>
          Eventy is the best place to build a wide networks around you!
        </h2>
      </div>
    </div>
  );
}

export default About;
