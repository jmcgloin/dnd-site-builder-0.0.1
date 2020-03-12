import  React, {Component} from 'react';

export default class Form extends Component {
	renderChildrenComponents = () => {
		return this.props.children.map
	}
	render() {
		const { form } = this.props
		return (
			<React.Fragment>
				<h1>{ form.formTitle }</h1>
				<form onSubmit={ this.handleOnSubmit }>
				</form>
			</React.Fragment>
		)
	}
}

