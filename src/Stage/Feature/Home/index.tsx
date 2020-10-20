
import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Box, createStyles, Grid, WithStyles, withStyles } from '@material-ui/core';
import GLOBE from './map';
import { Marker } from 'react-globe';

//#region CONSTANTS
export enum MarkerType {
  SOME_VALUE = 'SOME_VALUE',
  OTHER_VALUE = 'OTHER_VALUE',
}

// const DEFAULT_MASTER_SCHEMA: Schema = {};
// const DEFAULT_MASTER_SETUP = {
//   loading: false,
//   schema: DEFAULT_MASTER_SCHEMA,
//   count: 0,
// }
//#endregion

//#region QUERIES
// const query = ({obj: any}): Partial<T> => { return null}
//#endregion

//#region STYLE
const styles = () => createStyles({
  home__title: { textTransform: 'capitalize' }
});
//#endregion

//#region CONNEXION
const mapStateToProps = (state: any) => ({
  user: state.user,
});
//this map actions to our props in this functional component
const mapActionsToProps = {};
//#endregion

type HomeProps = WithStyles<typeof styles>;
//#region COMPONENT
const feature = withStyles(styles)(React.memo((props: HomeProps) => {

  const { classes } = props;
  console.log(props)

  //#region CYCLE
  useEffect(
    () => {
      console.log('component mounted')
      //  dispatch();
    },
    [],
  );
  //#endregion

  //#region EVENT
  const userDidSelectArea = useCallback(
    (marker: Marker) => {
      console.log('userDidSelectArea : ')
      console.log(marker)
    },
    [],
  );
  //#endregion

  //#region MODEL
  const mapInitialMarkers: Marker[] = useMemo(
    () => {
      return [
        {
          id: 'marker1',
          city: 'Singapore',
          color: 'red',
          coordinates: [1.3521, 103.8198],
          value: 50,
          tracks: ['007', '002'],
        },
        {
          id: 'marker2',
          city: 'New York',
          color: 'blue',
          coordinates: [40.73061, -73.935242],
          value: 25,
          tracks: ['003', '001'],
        },
        {
          id: 'marker3',
          city: 'San Francisco',
          color: 'orange',
          coordinates: [37.773972, -122.431297],
          value: 35,
          tracks: ['005', '007', '009'],
        },
        {
          id: 'marker4',
          city: 'Beijing',
          color: 'gold',
          coordinates: [39.9042, 116.4074],
          value: 135,
          tracks: ['004', '002'],
        },
        {
          id: 'marker5',
          city: 'London',
          color: 'green',
          coordinates: [51.5074, 0.1278],
          value: 80,
          tracks: ['006', '008'],
        },
        {
          id: 'marker6',
          city: 'Los Angeles',
          color: 'gold',
          coordinates: [29.7604, -95.3698],
          value: 54,
          tracks: ['001', '003'],
        },
      ];
    },
    [],
  );
  //#endregion

  //#region RENDERING
  const configuration = useMemo(
    () => ({
      name: 'map',
      initialValues: {
        markers: mapInitialMarkers,
        setup: {
          loading: false,
        }
      },
      onSubmit: async (values: any) => {
        console.log(values);
        // dispatch();
      },
    }),
    [mapInitialMarkers],
  );

  return (
    <Box>
      <Grid
        container
        alignContent='center'
        alignItems='center'
        justify='center'
      >
        <Grid item md={12}>
          <GLOBE
            userDidSelectArea={userDidSelectArea}
            {...configuration}
          />
        </Grid>
      </Grid>
    </Box>
  )
  //#endregion

}));
//#endregion

export const Home =  connect(mapStateToProps, mapActionsToProps)(feature);
