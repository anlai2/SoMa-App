import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

class PostList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.posts);
  }

  renderRow(post) {
    return <PostDetail  post={post}/>;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);