import PropTypes from 'prop-types';
import EventStepper from './create-event';
import Cover from './cover';
import OrganizationEventCard from '../../components/organization-event-card';

const Organization = ({ organizationId }) => (
  <>
    <Cover />
    <EventStepper />
    <OrganizationEventCard />
  </>
);
Organization.propTypes = {
  organizationId: PropTypes.number.isRequired,
};

export default Organization;
