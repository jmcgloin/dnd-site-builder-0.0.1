import  React, {Component} from 'react';

export default class Button extends Component {
	render() {
		return (
			const { buttonDisplayText, buttonStyle, buttonClass, buttonType, buttonClickCallback } = this.props
			<React.Fragment>
				<button
					type={ buttonType }
					onClick={ buttonClickCallback }
					className={ `${ buttonStyle } ${ buttonClass }` }
				>{ buttonDisplayText }</button>
			</React.Fragment>
		)
	}
}

