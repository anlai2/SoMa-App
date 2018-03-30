import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView  from 'react-native-maps';

class MapScreen extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.1922,
          longitudeDelta: 0.1421,
        }}
        onPress={click => console.log(click.nativeEvent)}
      >
        <MapView.Marker
          coordinate={{
            latitude: 37.78825,
          longitude: -122.4324
          }}
            title={'Marker Title'}
            description={'Market Description'}
            />
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
  }
})

export default MapScreen;