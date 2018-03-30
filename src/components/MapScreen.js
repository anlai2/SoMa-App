import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { searchCreate, searchStore } from '../actions';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';
import { Button, CardSection, Card } from './common';

class MapScreen extends Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  .5,
        longitudeDelta: .5
      }
      console.log(position.coords.latitude)
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
    console.log(this.state.mapRegion)
  }

  onMapPress(e) {
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.168,
      longitudeDelta: 0.1325
    }
    console.log('pressed')
    console.log(this.state.mapRegion)
    this.onRegionChange(region, region.latitude, region.longitude);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  confirmButtonPress(loc) {
    console.log(loc);
  }

  storeLocation(location) {
    this.props.searchStore(location)
  }
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.mapRegion}
        showsUserLocation={true}
        followUserLocation={true}
        onRegionChange={this.onRegionChange.bind(this)}
      >
        <MapView.Marker
          coordinate={this.state.mapRegion}
            title={'Marker Title'}
            description={'Market Description'}
            />

          <CardSection>
            <Button>
              Confirm
            </Button> 
          </CardSection>

      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  }
})

const mapStateToProps = (state) => {
  const { longitude, latitude } = state.postForm;

  return { longitude, latitude };
};

export default connect(mapStateToProps, { 
  searchCreate, searchStore
})(MapScreen);