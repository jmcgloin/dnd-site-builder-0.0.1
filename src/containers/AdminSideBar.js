import  React, {Component} from 'react';

class AdminSideBar extends Component {
	render() {
		return (
				<div className="admin-sidebar full-height flex flex-column flex-start" >
					<div className="button-container">
						<button className="button rounded">div</button>
						<button className="button rounded">h1</button>
						<button className="button rounded">h2</button>
						<button className="button rounded">h3</button>
						<button className="button rounded">paragraph</button>
						<button className="button rounded">span</button>
						<button className="button rounded">image</button>
					</div>
					<div className="component-dialog">
						Component dialog goes here
					</div>
				</div>
		)
	}
}

export default AdminSideBar