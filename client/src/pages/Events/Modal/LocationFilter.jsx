import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const LocationFilter = ({ setValue }) => {
  const handleChange = (e, newValue) => setValue(
    (prevState) => ({ ...prevState, location: newValue }),
  );
  return (
    <FormControl component="fieldset" sx={{ width: '40%' }}>
      <FormLabel component="legend">Location</FormLabel>
      <RadioGroup row aria-label="location" name="row-radio-buttons-group" onChange={handleChange}
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <FormControlLabel value="online" control={<Radio />} label="Online"/>
        <FormControlLabel value="inPerson" control={<Radio />} label="In Person"/>
        <FormControlLabel value="all" control={<Radio />} label="All" />
      </RadioGroup>
    </FormControl>
  );
};
LocationFilter.propTypes = {
  setValue: PropTypes.func.isRequired,
};
export default LocationFilter;
