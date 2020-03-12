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
	addClass = ({ target }) => {
		const option = document.getElementsByTagName("select")[0]
		console.log(option)
	}
	render() {
		return (
			<React.Fragment>
				<form onSubmit={ this.handleOnSubmit } className="flex flex-column">
					<div className="flex-major flex flex-column">
					<label htmlFor="elementId">Element Id</label> 
					<input type="text" name="elementId" id="elementId" placeholder="Optional"/> {/*this will need to be check for html stuff*/}
					
					<span>
						<label htmlFor="classes">Choose Classes</label>
						<button type="button" onClick={ this.addClass } className="button rounded">Add</button>
					</span>
					<select id="classes"> {/*fix this, see example below*/}
						<option disabled selected value> --Select Optional Classes-- </option>
					  <option value=".flex">Flex Container </option>
					  <option value=".flex-row">Row Direction</option>
					  <option value=".flex-column">Column Direction</option>
					  <option value=".flex-around">Space Around</option>
					  <option value=".flex-center">Align to Middle</option>
					  <option value=".flex-start">Align to Start</option>
					  <option value=".flex-vcenter">Align to Center</option>
					  <option value=".flex-major">Take Up Most Space</option>
					  <option value=".flex-wrap">Wrap Items</option>
					</select>
					
					<label htmlFor="customClasses">Custom Classes</label> 
					<input type="text" name="customClasses" id="customClasses" placeholder="Optional"/> {/*this will need to be check for html stuff*/}
					
					<label htmlFor="elementId">Element Id</label> 
					<input type="text" name="elementId" id="elementId" placeholder="Optional"/> {/*this will need to be check for html stuff*/}
					
					<label htmlFor="elementId">Element Id</label> 
					<input type="text" name="elementId" id="elementId" placeholder="Optional"/> {/*this will need to be check for html stuff*/}
					
					<label htmlFor="elementId">Element Id</label> 
					<input type="text" name="elementId" id="elementId" placeholder="Optional"/> {/*this will need to be check for html stuff*/}
					
					</div>
					<div>
						<button className="dialog-button rounded button" type="submit">Create</button>
						<button className="dialog-button rounded button" type="button" onClick={ this.handleDiscard } >Discard</button>
					</div>
				</form>
			</React.Fragment>
		)
	}
}

// <select
//                 className="input form-control"
//                 onChange={e => this.setState({ selected: e.target.value || null })}
//                 value={this.state.selected || ''}>
//                 <option value=''></option>
//                 <option value='1'>cook dinner</option>
//                 <option value='2'>do dishes</option>
//                 <option value='3'>walk dog</option>
//             </select>