
import React from 'react';
import { createStyles, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import { Marker } from 'react-globe';
// import moment from 'moment';


const overlayStyles = () => createStyles({
  map__title: { textTransform: 'capitalize' },
  map__fixed: {
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
  },
});

export interface OverlayMarker {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
  tracks: string[];
}

export interface OverlayProps {
  /**
   * the config needed to set the map up
   */
  markers: Marker[];
};

const Overlay = withStyles(overlayStyles)(React.memo(
  (props: WithStyles<typeof overlayStyles> & OverlayProps) => {
    const { markers } = props;
  return (
    <>
      <Grid className="overlay">
        <div className="header">
          <div>
            <h2>World Tour Beats</h2>
            <div className="overlay-subtitle">
              Trends
            </div>
          </div>
          <div>
            <Typography className="nudge-right">
              its real
            </Typography>
            <Typography>insta</Typography>
          </div>
        </div>
        <div className="content">
          TOP 5 SEARCHING CITIES
          {markers.slice(0, 5).map((marker) => (
            <Grid key={marker.city}>
              {/* <h2 onClick={() => dispatch({ type: 'FOCUS', payload: marker })}> */}
              <h2>{marker.city} ({marker.value}) </h2>
            </Grid>
          ))}
        </div>
        <div className="footer">
          {/* Updated on {moment(lastUpdated).format('MMM D, YYYY')} */}
        </div>
      </Grid>
    </>
  );

}));

export default Overlay;
