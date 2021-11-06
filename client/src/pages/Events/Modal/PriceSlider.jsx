import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';

const PriceSlider = ({ value, setValue }) => {
  const followersMarks = [
    {
      value: 0,
      scaledValue: 0,
      label: 'Free',
    },
    {
      value: 25,
      scaledValue: 50,
      label: '50$',
    },
    {
      value: 50,
      scaledValue: 100,
      label: '100$',
    },
    {
      value: 75,
      scaledValue: 500,
      label: '500$',
    },
    {
      value: 100,
      scaledValue: 1000,
      label: '1000$',
    },
  ];
  const scale = (val) => {
    const previousMarkIndex = Math.floor(val / 25);
    const previousMark = followersMarks[previousMarkIndex];
    const remainder = val % 25;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }
    const nextMark = followersMarks[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
    return remainder * increment + previousMark.scaledValue;
  };
  const handleChange = (event, newValue) => {
    setValue((prevState) => ({ ...prevState, price: newValue }));
  };
  return <div className="price-filter">

    <h2>Price</h2>
    <Slider
      sx={{ maxWidth: '600px' }}
      value={value}
      min={0}
      step={1}
      max={100}
      marks={followersMarks}
      scale={scale}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="non-linear-slider"
    />
  </div>;
};
PriceSlider.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default PriceSlider;
