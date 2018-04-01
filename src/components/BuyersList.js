import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { postsFetchBuy } from '../actions';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import ListItem from './ListItem';

class BuyersList extends Component {
	componentWillMount(){
		this.createDataSource();
	}
	createDataSource() {
		this.props.postsFetchBuy();
	}
	renderRow(post) {
		console.log(post);
		return <ListItem post={post} />;
	}


	render() {
		return (
			<LinearGradient colors={['#009688', '#B2DFDB']} style={styles.backgroundStyle}>
				<Button onPress={Actions.sell}>
				Sell Page
				</Button>
				<FlatList
					data={this.props.posts}
					renderItem={this.renderRow}
					keyExtractor={post => post.uid}
				/>
			</LinearGradient>
			);
	}
}

const styles = {
	backgroundStyle: {
		flex: 1,
		backgroundColor: '#7834a8'
	}
};

const mapStateToProps = state => {
	const posts = _.map(state.posts, (val, uid) => {
		return { ...val, uid };
	});

	return { posts };
};
export default connect(mapStateToProps, { postsFetchBuy })(BuyersList);