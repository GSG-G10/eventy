import { TextField, Button, Input } from '@mui/material';
import MultipleSelectChip from './categories';

const getStepContent = (step, event, setEvent) => {
  switch (step) {
  case 0: return (
    <TextField
      fullWidth
      id="outlined-basic"
      type="name"
      name="name"
      label="Event Name"
      variant="outlined"
      required
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  case 1: return (
    <input
      className="dateInput"
      required
      type="datetime-local"
      name="date"
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  case 2: return (
    <TextField
      fullWidth
      id="outlined-basic"
      type="local"
      name="location"
      label="Event Location"
      variant="outlined"
      required
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  case 3: return (
    <MultipleSelectChip event={event} setEventState={setEvent} />
  );
  case 4: return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        type="file"
        name="photo"
        required
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
      />
      <Button variant="contained" component="span">Upload</Button>
    </label>
  );
  case 5: return (
    <TextField
      fullWidth
      label="Age Restriction"
      name="age"
      type="number"
      required
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  case 6: return (
    <TextField
      fullWidth
      label="Description"
      name="description"
      type="text"
      required
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  case 7: return (
    <TextField
      fullWidth
      label="Why should people attend this event?"
      name="details"
      type="text"
      required
      onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
    />
  );
  default: return (<h1>Nothing Here</h1>);
  }
};
export default getStepContent;
