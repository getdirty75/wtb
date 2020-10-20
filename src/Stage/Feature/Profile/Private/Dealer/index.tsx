
import React from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import { loginUser } from '../../../../../Store/actions/userActions';

function Feature(props: any) {

  return (
    <Box>
      <Box className={props.classes.box}>
        <Typography variant='h4'>
          <Box fontWeight={600} letterSpacing={3}>
            WTB
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

export default connect(mapStateToProps, mapActionsToProps)(Feature)