import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategoryFilter = ({ value, setValue }) => {
  const handleChange = (e) => setValue((prevState) => ({
    ...prevState, category: e.target.value,
  }));

  const categoriesArray = [
    'all', 'art', 'sport', 'technology', 'formal',
    'workshops', 'music', 'food', 'networking', 'business',
    'literature', 'politics', 'social', 'entertainment', 'education',
  ];

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150, width: '250px' }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          label="Category"
        >
          {categoriesArray.map((category) => (
            <MenuItem
              key={category}
              value={category}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

CategoryFilter.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CategoryFilter;
