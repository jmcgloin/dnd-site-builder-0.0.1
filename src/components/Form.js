import  React, {Component} from 'react';

export default class Form extends Component {
	renderChildrenComponents = () => {
		return this.props.children.map
	}
	render() {
		return (
			<React.Fragment>
				<form onSubmit={ this.handleOnSubmit }>
				</form>
			</React.Fragment>
		)
	}
}

