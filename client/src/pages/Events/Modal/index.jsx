import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import PriceSlider from './PriceSlider';
import LocationFilter from './LocationFilter';
import CategoryFilter from './CategoryFilter';

import './style.css';

const FilterModal = ({
  open, setOpen, filters, setFilters, submitFilter,
}) => {
  const handleClose = () => setOpen(false);

  return <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="filters">
        <PriceSlider value={filters.price} setValue={setFilters} />
        <div className="secondRow">
          <LocationFilter value={filters.location} setValue={setFilters} />
          <CategoryFilter value={filters.category} setValue={setFilters}/>
        </div>
        <Button variant="contained" onClick={submitFilter}>Submit</Button>
      </div>
    </Modal>
  </>;
};

FilterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
  submitFilter: PropTypes.func.isRequired,
};
export default FilterModal;
