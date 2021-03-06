import  React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import AddButtonForm from '../containers/AddButtonForm';

export default class Home extends Component {
	render() {
		return (
			<div className="flex flex-row flex-center flex-vcenter full-height">
				<Link to="/login">
					<button type="click" className="button big-button rounded">
						Already have an account?
					</button>
				</Link>
				<Link to="/signup">
					<button type="click" className="button big-button rounded">
						Create a new account.
					</button>
				</Link>
			</div>
		)
	}
}

