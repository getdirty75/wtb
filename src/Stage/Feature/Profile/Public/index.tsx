
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { createStyles, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import { mockedUsers } from '../../../Data/Users';
import { BEAT, USER } from '../../../Data/model';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { mockedBeats } from '../../../Data/Beats';

//#region STYLE
const styles = () => createStyles({
  profile__title: { textTransform: 'capitalize' }
});
//#endregion

//#region CONNEXION
const mapStateToProps = (state: any) => ({
  user: state.user,
});
const mapActionsToProps = {};
//#endregion

type ProfileProps = WithStyles<typeof styles>;
//#region COMPONENT
const feature = withStyles(styles)(React.memo((props: ProfileProps & RouteComponentProps) => {

  const { classes } = props;
  const { beatmakerId } = useParams<{beatmakerId: string}>();

  //#region MODEL
  const currentBeatmaker = useMemo(
    () => {
      return mockedUsers.filter( (user: USER) => user.id === parseInt(beatmakerId, 10))[0];
    },
    [beatmakerId],
  );

  const allBeats = useMemo(
    () => {
      return mockedBeats.filter( (beat: BEAT) => beat.basics.userId === parseInt(beatmakerId, 10))
    },
    [beatmakerId],
  );
  //#endregion

  return (

      <Grid
        container
        alignContent='center'
        alignItems='center'
        direction='column'
        justify='center'
      >
        <Typography className={classes.profile__title} variant='h4'>{currentBeatmaker.info.username}</Typography>
        <Typography className={classes.profile__title} variant='body1'>(aka {currentBeatmaker.info.firstName} - {currentBeatmaker.info.lastName})</Typography>
        <Typography variant='body1'>living {currentBeatmaker.info.address}</Typography>
        {allBeats.map((beat, index) => {
            return (
              <Grid container key={index}>
                 <audio controls>
                  <source src={beat.url} type="audio/mpeg" />
                </audio>
                <Typography variant='h6'>{beat.basics.name}</Typography>
                <Typography variant='body1'>{beat.basics.duration}</Typography>
                <Typography variant='h6'>{beat.basics.price} €</Typography>
                <Typography variant='h6'>{beat.basics.exclusive ? 'Exclusive' : ''}</Typography>
              </Grid>
            )
          })}
      </Grid>
  );

}));
//#endregion

export const Profile =  connect(mapStateToProps, mapActionsToProps)(feature);
