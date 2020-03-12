import  React, {Component} from 'react';

export default class Input extends Component {
	render() {
		return (
			<React.Fragment>
				<input
					type="text"
					value={ this.state.inputValue }
					onChange={ this.handleInputOnChange }
					name={ this.props.inputName }
				/>
			</React.Fragment>
		)
	}
}

