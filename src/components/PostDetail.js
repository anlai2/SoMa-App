import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class PostDetail extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const {post, expanded} = this.props;

		if(expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}> 
					{post.posttitle}
					</Text>
				</CardSection>
			);
		}
	}

	render () {
		const { titleStyle } = styles;
		const { id, username } = this.props.post;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectPost(id)}
			>
				<View>
					<CardSection>
						<Text style={ titleStyle }>
							{ username }
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedPostId === ownProps.post.id;

	return { expanded }
};

export default connect(mapStateToProps, actions)(PostDetail);