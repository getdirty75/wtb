
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Box, createStyles, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import GLOBE from './map';
import { Marker } from 'react-globe';
import { mockedCountries } from '../../Data/Countries';
import { mockedUsers } from '../../Data/Users';
import { COUNTRY } from '../../Data/model';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';


const styles = () => createStyles({
  home__title: { textTransform: 'capitalize' },
  map__fixed: {
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
  },
  map__audio: {
    color: '#fff',
  },
});

const mapStateToProps = (state: any) => ({ user: state.user });
const mapActionsToProps = {};

type HomeProps = WithStyles<typeof styles>;

const feature = withStyles(styles)(React.memo((props: HomeProps) => {
  const { classes } = props;
  const [selectedItem, setSelectedItem] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({} as COUNTRY);

  useEffect(() => { console.log('component mounted')},[]);
  const userDidSelectArea = useCallback(
    (marker: Marker) => {
      const currentCountry = mockedCountries.filter((country) => country.marker.id === marker.id)[0];
      setSelectedCountry(currentCountry);
      setSelectedItem(true);
    },
    [],
  );
  const userDidUnselectArea = useCallback(() => { setSelectedItem(false) }, []);
  const mapInitialMarkers: Marker[] = useMemo(
    () => mockedCountries.map(({ marker }) => marker),
    [],
  );

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
        console.log('onSubmit' + values);
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
            userDidUnselectArea={userDidUnselectArea}
            {...configuration}
          />
          <Grid className={classes.map__fixed}>
            <Grid className="overlay">
              <div className="content">
                {selectedItem &&
                  selectedCountry.beatmakers.map((beatmakerId, index) => {
                    return (
                      <Link key={index} to={`/profile/${beatmakerId}`}>
                        <Typography>
                          {mockedUsers.filter(({id}) => id === beatmakerId)[0].info.username}
                        </Typography>
                      </Link>
                    )
                  })
                }
              </div>
              <Grid container className="footer">
                <Grid item md={5} xs={12}>
                Image titre ...
                </Grid>
                <Grid item md={4} xs={12}>
                  <ReactAudioPlayer
                    autoPlay
                    className={classes.map__audio}
                    controls
                    src="my_audio_file.ogg"
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  Tools
                </Grid>

                {/* <audio className={classes.map__audio} controls>
                  <source src="horse.mp3" type="audio/mpeg" />
                </audio> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
  //#endregion

}));
//#endregion

export const Home =  connect(mapStateToProps, mapActionsToProps)(feature);
