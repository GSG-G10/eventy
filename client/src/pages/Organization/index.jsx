import PropTypes from 'prop-types';
import EventStepper from './create-event';
import OrganizationCard from '../../components/organization-event-card';

const Organization = ({ organizationId }) => (
  <>
    <OrganizationCard/>
    <EventStepper />
  </>
);
Organization.propTypes = {
  organizationId: PropTypes.number.isRequired,
};

export default Organization;
