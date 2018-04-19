import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { fetchTransactionPosts } from '../actions';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import TransactionListItem from './TransactionListItem';

class TransactioningScreen extends Component {
	componentWillMount(){
		this.createDataSource();
	}
	createDataSource() {
		this.props.fetchTransactionPosts();
	}
	renderRow(post) {
		return <TransactionListItem post={post} />;
	}


	render() {
		return (
			<View style={styles.backgroundStyle}>
				<FlatList
					data={this.props.posts}
					renderItem={this.renderRow}
					keyExtractor={post => post.uid}
				/>
			</View>
			);
	}
}

const styles = {
	backgroundStyle: {
		flex: 1
	}
};

const mapStateToProps = state => {
	const posts = _.map(state.posts, (val, uid) => {
		return { ...val, uid };
	});

	return { posts };
};
export default connect(mapStateToProps, { fetchTransactionPosts })(TransactioningScreen);