
import React from 'react';

// import { useStateValue } from '../state';
import { Button, Grid } from '@material-ui/core';
// import Fade from '../Fade';

export default function Intro() {
  // const [{ hasLoaded, start }, dispatch] = useStateValue();

  return (
    <Grid>

      <h1>World Tour Beats Trends</h1>
      <p>DESCRIPTION</p>
      {/* <Button onClick={() => dispatch({ type: 'START' })} /> */}
      <Button />

    </Grid>
  );
}
