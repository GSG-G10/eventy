import propTypes from 'prop-types';
import {
  OutlinedInput, MenuItem, FormControl, Select,
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Categories = [
  'Art',
  'Sport',
  'Technology',
  'Formal',
  'Workshops',
  'Music',
  'Food',
  'Networking',
  'Business',
  'Literature',
  'Politics',
  'Social',
  'Entertainment',
  'Education',
];

const CategoriesSelector = ({ value, handleChange }) => (
  // eslint-disable-next-line implicit-arrow-linebreak
  <div>
    <FormControl sx={{ width: '100%' }}>
      <Select
        multiple
        displayEmpty
        name="categories"
        size="small"
        style={{ backgroundColor: '#d9d9d9' }}
        color="secondary"
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span style={{ color: '#808080' }}>Categories</span>;
          }

          return selected.join(', ');
        }}
        MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>Categories</em>
        </MenuItem>
        {Categories.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
CategoriesSelector.propTypes = {
  value: propTypes.array,
  handleChange: propTypes.func.isRequired,
};

export default CategoriesSelector;
