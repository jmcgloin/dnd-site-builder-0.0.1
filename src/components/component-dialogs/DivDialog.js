import  React, {Component} from 'react';

export default class DivDialog extends Component {
	state = {

	}
	handleOnSubmit = (e) => {
		e.preventDefault()
		console.log("submit")
	}
	handleDiscard = (e) => {
		console.log("discard")
		this.props.handleDiscard()
	}
	render() {
		return (
			<React.Fragment>
				<form onSubmit={ this.handleOnSubmit }>
					<label htmlFor="elementName">N</label>
					<div>
						<button className="dialog-button rounded button" type="submit">Create</button>
						<button className="dialog-button rounded button" type="button" onClick={ this.handleDiscard } >Discard</button>
					</div>
				</form>
			</React.Fragment>
		)
	}
}

