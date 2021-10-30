import {
  TextField, Button, Input, OutlinedInput, InputAdornment,
} from '@mui/material';
import MultipleSelectChip from './categories';

const getStepContent = (step, event, setEvent) => {
  switch (step) {
  case 0: return (
    <>
      <h2>Enter your Event Name:</h2>
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
    </>
  );
  case 1: return (
    <>
      <div className="date-cont">
        <h3 className="label">Start Date:</h3>
        <h3 className="label">Expire Date:</h3>
        <h3 className="label">Start Time:</h3>
      </div>
      <div className="date-cont">

        <input
          className="dateInput"
          required
          type="date"
          name="startDate"
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
        <input
          className="dateInput"
          required
          type="date"
          name="expireDate"
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
        <input
          className="dateInput"
          required
          type="time"
          name="duration"
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
      </div>
    </>
  );
  case 2: return (
    <>
      <h2>Enter your Event Location:</h2>
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
    </>
  );
  case 3: return (
    <>
      <h2>Select your Event Categories:</h2>
      <MultipleSelectChip event={event} setEventState={setEvent} />
    </>
  );
  case 4: return (
    <>
      <h2>Upload  a suitable event photo :</h2>
      <label htmlFor="contained-button-file">
        <Input
          accept="image/*"
          id="contained-button-file"
          type="file"
          name="image"
          required
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
        <Button variant="contained" component="span">Upload</Button>
      </label>
    </>
  );
  case 5: return (
    <>
      <h2>Is there any age restriction for the event?</h2>
      <TextField
        fullWidth
        label="type 0 if there is no age restriction"
        name="age"
        type="number"
        required
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
      />
    </>
  );
  case 6: return (
    <>
      <h1>Write a description of the event :</h1>
      <TextField
        fullWidth
        label="Description"
        name="description"
        type="text"
        required
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
      />
    </>
  );
  case 7: return (
    <>
      <h1>Why should people attend this event?</h1>
      <TextField
        fullWidth
        label="Type here"
        name="details"
        type="text"
        required
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
      />
    </>
  );
  case 8: return (
    <>
      <h1>Is this event has a ticket price?</h1>
      <OutlinedInput
        fullWidth
        id="outlined-adornment-amount"
        type="number"
        default= '0'
        name="price"
        label="type 0 if there is no privce"
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </>
  );
  default: return (<h1>Nothing Here</h1>);
  }
};
export default getStepContent;
