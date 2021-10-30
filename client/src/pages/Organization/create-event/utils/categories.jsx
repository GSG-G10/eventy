import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import {
  OutlinedInput, InputLabel, FormControl, MenuItem, Select, Chip, Box,
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

const categoriesArray = [
  'Art',
  'Sport',
  'Technology',
  'Formal',
  'Workshops',
  'Music',
  'Food',
  'Networking',
  'Business',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
  };
}
export default function MultipleSelectChip({ event, setEventState }) {
  const [categories, setCategories] = useState([]);
  const theme = useTheme();

  const handleChange = (e) => {
    const {
      value,
    } = e.target;
    setCategories(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setEventState({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel id="demo-multiple-chip-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={event.category ? event.category : categories}
          name="category"
          required
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Categories" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categoriesArray.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, categories, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
MultipleSelectChip.propTypes = {
  setEventState: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};
