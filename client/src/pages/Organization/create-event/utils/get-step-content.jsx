import {
  TextField, Button, Input, OutlinedInput,
} from '@mui/material';
import MultipleSelectChip from './categories';

const getStepContent = (step, event, setEvent) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // eslint-disable-next-line func-names
    reader.onload = function (evt) {
      setEvent({ ...event, image: (evt.target.result) });
    };
    reader.readAsDataURL(file);
  };
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
        value={event.name}
        variant="standard"
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
          value={event.startDate}
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
        <input
          className="dateInput"
          required
          type="date"
          name="expireDate"
          value={event.expireDate}
          onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
        />
        <input
          className="dateInput"
          required
          type="time"
          name="duration"
          value={event.duration}
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
        value={event.location}
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
          onChange={handleUpload}
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
        label="Enter Age"
        name="age"
        type="number"
        value={event.age}
        required
        variant="standard"
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
        value={event.description}
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
        value={event.details}
        required
        variant="filled"
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
        name="price"
        label="Enter price"
        value={event.price}
        onChange={(e) => setEvent({ ...event, [e.target.name]: e.target.value })}
      />
    </>
  );
  default: return (<h1>Nothing Here</h1>);
  }
};
export default getStepContent;
