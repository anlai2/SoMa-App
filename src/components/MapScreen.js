import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { searchCreate, searchStore } from '../actions';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';
import { Button, CardSection, Card } from './common';

class MapScreen extends Component {
  state = {
    mapRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta:  .5,
        longitudeDelta: .5
      },
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
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  confirmButtonPress() {
    const { mapRegion } = this.state;

    console.log(mapRegion);
    this.props.searchStore(mapRegion);

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
            <Button onPress={this.confirmButtonPress.bind(this)} >
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