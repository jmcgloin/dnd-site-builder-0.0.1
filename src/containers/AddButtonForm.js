import  React, {Component} from 'react';
// import { connect } from 'react-redux';


class AddButtonForm extends Component {
	state = {
		buttonName: "",
		buttonDisplayText: "",
		buttonCallback: "",
		buttonBackgroundColor: "",
		buttonTextColor: "",
		buttonShape: ""

	}
	handleOnChange = ({ target }) => {
		this.setState({
			...this.state,
			[target.name]: target.value
		})
	}
	render() {
		console.log('addbuttonform')
		const { buttonName, buttonDisplayText, buttonCallback, buttonBackgroundColor, buttonTextColor, buttonShape } = this.state
		return (
			<React.Fragment>
			<h1>Create a new button</h1>
				<form onSubmit={ this.onFormSubmit }>
					<label>
						Name this button: 
						<input
							type="text"
							value={ buttonName }
							onChange={ this.handleOnChange }
							name="buttonName"
						/>
					</label>
						<br />
					<label>
						What text should be on this button: 
						<input
							type="text"
							value={ buttonDisplayText }
							onChange={ this.handleOnChange }
							name="buttonDisplayText"
						/>
					</label>
						<br />
					<label>
						What should this button do: there should be a dropdown here
						{/*dropdown menu here*/}
					</label>
						<br />
					<label>
						What color should this button be: there should be a color picker here
						{/*this should be a color picker*/}
						<input
							type="text"
							value={ buttonBackgroundColor }
							onChange={ this.handleOnChange }
							name="buttonBackgroundColor"
						/>
					</label>
						<br />
					<label>
						What color should this button's text be: there should be a color picker here
						{/*this should be a color picker*/}
						<input
							type="text"
							value={ buttonTextColor }
							onChange={ this.handleOnChange }
							name="buttonTextColor"
						/>
					</label>
						<br />
					<label>
						What shape should this button be: there should be a dropdown here
						{/*dropdown menu here*/}
					</label>
				</form>

			</React.Fragment>
		)
	}
}

export default AddButtonForm
// export default connect()(AddButtonForm)