import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { searchCreate, searchStore } from '../actions';
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps';
import { Button, CardSection, Card } from './common';

class MapScreen extends Component {
  storeLocation(location) {
    console.log(location.coordinate)
  }

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
        showsUserLocation={true}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
            title={'Marker Title'}
            description={'Market Description'}
            />
        <Card>
          <CardSection>
            <Button onPress={coor => this.storeLocation(coor.nativeEvent)} >
              Confirm
            </Button> 
          </CardSection>
        </Card>
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