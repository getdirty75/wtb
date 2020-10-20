
import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import ReactGlobe, { Marker, Optional, Options } from 'react-globe';
import { connect } from 'react-redux';
// import MenuTop from '../../Component/MenuTop';
import Overlay from './overlay';
// import optional tippy styles for tooltip support
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';

//#region MAP

const mapStyles = () => createStyles({
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

export interface Globe_Marker {
  id: string;
  city: string;
  color: string;
  coordinates: number[];
  value: number;
  tracks: string[];
}
export interface MapConfig {
  /**
   * the config needed to set the map up
   */
  initialValues: {
    markers: Marker[],
    setup: {
      loading: boolean,
    }
  }
  /**
   * TODO
   */
  name: string;
  /**
   * submit been triggered by human interaction.
   */
  onSubmit: (values: any) => void;
  /**
   * event been triggered by human interaction.
   */
  userDidSelectArea: (marker: Marker) => void;

};

const Map = withStyles(mapStyles)(React.memo((props: WithStyles<typeof mapStyles> & MapConfig) => {

  const { classes, initialValues, userDidSelectArea } = props;
  console.log("== HOME SECTION ===");
  // console.log(user);
  const options: Optional<Options> = {
    ambientLightColor: '#fff',
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: '#7bdbdc',
    pointLightIntensity: 1.5,
    globeGlowColor: '#fff',
    markerTooltipRenderer: (marker: Marker) => `${marker.city} (${marker.value})`,
  };

  // const [globe, setGlobe] = useState(null);
  // console.log(globe); // captured globe instance with API methods

  return (
    <>
      <ReactGlobe
        height='100vh'
        // globeBackgroundTexture='https://2050.earth/assets/earth/earth_1.png'
        globeCloudsTexture={null}
        globeTexture='https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg'
        initialCoordinates={[1.3521, 103.8198]}
        markers={initialValues.markers}
        options={options}
        width="100%"
        onClickMarker={
          (marker, markerObject, event) => {
            console.log(marker, markerObject, event);
            userDidSelectArea(marker);
          }
        }
        // onGetGlobe={}
        onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        onGlobeTextureLoaded={() => console.log('globe loaded')}
        onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
      />
      <Grid className={classes.map__fixed}>
        <Overlay markers={initialValues.markers}/>
      </Grid>
    </>
  )

}));

const mapStateToProps = (state: any) => ({
  user: state.user,
});

//this map actions to our props in this functional component
const mapActionsToProps = {};
//#endregion

export default connect(mapStateToProps, mapActionsToProps)(Map);
