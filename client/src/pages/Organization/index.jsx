import PropTypes from 'prop-types';
import EventStepper from './create-event';

const Organization = ({ organizationId }) => (
  <>
    <EventStepper />
  </>
);
Organization.propTypes = {
  organizationId: PropTypes.number.isRequired,
};

export default Organization;
