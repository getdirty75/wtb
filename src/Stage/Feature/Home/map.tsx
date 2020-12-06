
import { createStyles, Grid, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import ReactGlobe, { Marker, Optional, Options } from 'react-globe';
import { connect } from 'react-redux';

const mapStyles = () => createStyles({
  map__fixed: {
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
  }
});

export interface MapConfig {
  initialValues: {
    markers: Marker[],
    setup: {
      loading: boolean,
    }
  };
  name: string;
  onSubmit: (values: any) => void;
  userDidSelectArea: (marker: Marker) => void;
  userDidUnselectArea: () => void;
};

const Map = withStyles(mapStyles)(React.memo((props: WithStyles<typeof mapStyles> & MapConfig) => {
  const { classes, initialValues, userDidSelectArea, userDidUnselectArea } = props;
  const options: Optional<Options> = {
    // ambientLightColor: '#222222',
    cameraRotateSpeed: 0.9,
    focusAnimationDuration: 2500,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: '#d2d2d2',
    pointLightIntensity: 2.5,
    globeGlowColor: '#fcdcbf',
    markerTooltipRenderer: (marker: Marker) => `${marker.city} (${marker.value})`,
  };

  return (
    <>
      <ReactGlobe
        height='100vh'
        globeTexture='https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe.jpg'
        initialCoordinates={[-1.28333, 36.81667]}
        markers={initialValues.markers}
        options={options}
        width="100%"
        onClickMarker={(marker) => userDidSelectArea(marker)}
        onDefocus={() => userDidUnselectArea()}
      />
      <Grid className={classes.map__fixed}>
        <Grid className="overlay">
          <div className="header">
            <div>
              <Typography variant='h2'>World Tour Beats</Typography>
              <Typography variant='body1' className="overlay-subtitle">Trends</Typography>
            </div>
            <div>
              <Typography className="nudge-right">its real</Typography>
              <Typography>insta</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )

}));

const mapStateToProps = (state: any) => ({ user: state.user });
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(Map);




        // globeTexture='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_%28blue_dots%29.svg/2100px-World_map_%28blue_dots%29.svg.png'
        // globeBackgroundTexture='https://upload.wikimedia.org/wikipedia/commons/f/f1/Shades_of_light_blue.png'
        // globeBackgroundTexture='https://www.theatlantic.com/technology/archive/2016/03/sky-gradients/473034/'
        // globeBackgroundTexture='https://2050.earth/assets/earth/earth_1.png'
        // globeCloudsTexture=''
        // globeTexture='https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg'
        // globeTexture='https://thumbs.dreamstime.com/z/dotted-world-map-15677472.jpg'
        // globeTexture='https://thumbs.dreamstime.com/z/d-hand-drawn-illustration-world-map-color-gradiented-watercolor-image-isolated-earth-planet-colorful-continents-white-108829238.jpg'
        // globeTexture='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_%28blue_dots%29.svg/2100px-World_map_%28blue_dots%29.svg.png'
        // globeTexture='https://s3.envato.com/files/220728291/worldmap.png'
        // globeTexture='https://thumbs.dreamstime.com/z/old-treasure-map-paper-background-32652776.jpg'
        // globeTexture='https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9WZWN0b3ItV29ybGQtTWFwLS1VUy1TdGF0ZXMtUHJldmlldy0xLmpwZw&q=90&enlarge=true&h=1036&w=1600'
        // globeTexture='https://images.template.net/wp-content/uploads/2015/11/17145825/Vector-Illustration-of-High-Detailded-World-Map.gif'
        // globeTexture='https://wallpapercave.com/wp/iz8ewgv.jpg'
