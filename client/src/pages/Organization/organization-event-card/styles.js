const style = {
  box1: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { sm: 250, lg: 400 },
    height: { sm: 230, lg: 200 },
    bgcolor: 'rgba(255, 255, 255, .87)',
    boxShadow: 30,
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',

  },
  box2: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { sm: 500, lg: 450 },
    height: { sm: 750, lg: '95vh' },
    bgcolor: 'rgb(255, 255, 255)',
    boxShadow: 30,
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  alert: {
    width: { sm: 200 },
    height: '60%',
    fontSize: '1.29rem',
  },
  button: {
    width: '50%',
    marginBottom: '1.5vh',
  },
};

export default style;
