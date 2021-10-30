import { useState, useRef } from 'react';
import {
  Box, Stepper, Step, Button, StepLabel, Snackbar, Alert,
} from '@mui/material';

import getStepContent from './utils/get-step-content';

import './style .css';

function MyStepper() {
  const [event, setEvent] = useState({});
  const [open, setOpen] = useState(false);
  const [validate, setValidate] = useState('success');
  // const [message, setMessage] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const myForm = useRef(null);

  const steps = ['Name', 'Time', 'Location', 'Categories', 'Image', 'Age', 'Descreption', 'Details', 'price'];

  const handleNext = () => {
    if (!myForm.current.checkValidity()) {
      setOpen(true);
      setValidate('error');
      return;
    }
    setOpen(false);
    setValidate('success');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    setActiveStep(steps.length);
    const reader = new FileReader();
    reader.onloadend = () => {
      setEvent({ ...event, image: reader.result });
    };

    try {
      await fetch('/api/v1/events', {
        method: 'POST',
        body: JSON.stringify(event),
        headers: { 'Content-Type': 'application/json' },
      });
      // .then((res) => setMessage(res.message));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className="box" sx={{ width: '95%' }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <h1>
          {'All steps completed - Your Event is published'}
        </h1>
      ) : (
        <form ref={myForm}>
          {getStepContent(activeStep, event, setEvent)}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              variant="outlined"
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
            Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={handleSubmit}>
             Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                color={validate}
              >
            Next
              </Button>
            )
            }
          </Box>
        </form>
      )}
      <Snackbar open={open} >
        <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
              This is a required field !
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default MyStepper;
