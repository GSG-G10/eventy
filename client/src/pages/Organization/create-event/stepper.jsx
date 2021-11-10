import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Stepper, Step, Button, StepLabel, Snackbar, Alert,
} from '@mui/material';

import PropTypes from 'prop-types';

import getStepContent from './utils/get-step-content';

import './style .css';

function MyStepper({ setSendRequest, sendRequest }) {
  const [event, setEvent] = useState({
    name: '',
    duration: '',
    startDate: '',
    expireDate: '',
    location: '',
    description: '',
    details: '',
    age: 0,
    price: 0,
    image: '',
  });
  const [open, setOpen] = useState(false);
  const [validate, setValidate] = useState('success');
  const [activeStep, setActiveStep] = useState(0);
  const myForm = useRef(null);

  const history = useHistory();

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

    try {
      await axios.post('/api/v1/events', event);
      setSendRequest(!sendRequest);
    } catch (err) {
      history.push('/error500');
    }
  };

  return (
    <Box className="box" sx={{ width: { sm: '100%', lg: '95%' } }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps} className='stepsLabels'>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <h1>
          All steps completed - Your Event is published
        </h1>
      ) : (
        <form ref={myForm}>
          <div style={{ padding: '15px' }}>
            {getStepContent(activeStep, event, setEvent)}

          </div>
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
          <Snackbar open={open} >
            <Alert variant="filled" severity="error" sx={{ width: '100%' }}>
              This is a required field !
            </Alert>
          </Snackbar>
        </form>
      )}
    </Box>
  );
}

MyStepper.propTypes = {
  setSendRequest: PropTypes.func.isRequired,
  sendRequest: PropTypes.bool.isRequired,
};

export default MyStepper;
