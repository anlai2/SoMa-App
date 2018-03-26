import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PostDetail from './PostDetail';

// Class component
class PostList extends Component {
  state = { albums: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }
 
 // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map(album => 
    	<PostDetail key={album.title} albumProp={album}/>); 
      //albumProp variable can be named anything as long as we use that name in other functions
  }
  
// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
 
// Make compomnent available to other parts of the application
export default PostList;
