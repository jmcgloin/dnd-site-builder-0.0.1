import  React, {Component} from 'react';
import { Link } from 'react-router-dom';

import AdminSideBar from '../containers/AdminSideBar'

class AdminPage extends Component {
	render() {
		return (
			<div className="flex flex-row flex-center flex-vcenter full-height">
				{/*this will be where the user can choose between viewing existing websites or creating a new one*/}
				<Link to="/websites/new">
					<button type="click" className="button big-button rounded">
						Create a new website
					</button>
				</Link>
				<Link to="/websites/index">
					<button type="click" className="button big-button rounded">
						See existing websites
					</button>
				</Link>
			</div>
		)
	}
}

export default AdminPage