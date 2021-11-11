import PropTypes from 'prop-types';
import {
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
  FilledInput,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Password = ({
  password,
  confirmPassword,
  handleChange,
  handleClickShowPassword,
  showPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          className="filled-adornment-password"
          size="small"
          name="password"
          inputProps={{ minLength: 8 }}
          style={{ backgroundColor: '#F3F3F3', width: '100%' }}
          color="secondary"
          type={showPassword ? 'text' : 'password'}
          value={password}
          required
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">
          Confirm Password
        </InputLabel>
        <FilledInput
          className="filled-adornment-password"
          size="small"
          style={{ backgroundColor: '#F3F3F3', width: '100%' }}
          color="secondary"
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          required
          name="confirmPassword"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={setShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};
Password.propTypes = {
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClickShowPassword: PropTypes.func,
  showPassword: PropTypes.bool,
  showConfirmPassword: PropTypes.bool,
  setShowConfirmPassword: PropTypes.func,
};
export default Password;
