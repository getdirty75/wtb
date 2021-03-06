
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { loginUser } from '../../../Store/actions/userActions';

function Feature(props: any) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>  setLoading(props.UI.loading),
    [props.UI]
  );

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   //your client side validation here
  //   //after success validation
  //   const userData = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   props.loginUser(userData, props.history);
  // }

  const handleChange = (e: any) => {
    e.persist();
    setValues((values: any) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Box>
      <Box>
      {/* <Box className={props.classes.box}> */}
        <Typography variant='h4'>
          <Box fontWeight={600} letterSpacing={3}>
            SIGN IN
          </Box>
        </Typography>
      </Box>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <Grid
          container
          alignContent='center'
          alignItems='center'
          justify='center'
          spacing={3}
        >
          <Grid item md={3}>
            <img src={'url'} alt='My Logo' />
          </Grid>
          <Grid item md={9}>
            <Paper>
              <Box>
                <TextField
                  variant='outlined'
                  margin='none'
                  value={values.email}
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  type='email'
                  onChange={handleChange}
                  // helperText={errors.email}
                  // error={errors.email ? true : false}
                />
                {/* <TextField
                  variant='outlined'
                  margin='normal'
                  value={values.password}
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  helperText={errors.password}
                  error={errors.password ? true : false}
                />
                {errors.message && (<Typography variant='body2'>{errors.message}</Typography>)} */}
                <Grid container>
                  <Grid item sm={6} md={6}>
                    <FormControlLabel
                      control={<Checkbox value='remember' color='primary' />}
                      label='Remember me'
                    />
                  </Grid>
                  <Grid item sm={6} md={6}>
                    <Link to='#'>Forgot password? </Link>
                  </Grid>
                </Grid>
                <Button type='submit' variant='contained' color='primary' disabled={loading}>
                  Login
                  {loading && (<CircularProgress className={props.classes.loader} size={30} color='secondary' />)}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container >
    </Box>
  )
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI
});

//this map actions to our props in this functional component
const mapActionsToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Feature);
