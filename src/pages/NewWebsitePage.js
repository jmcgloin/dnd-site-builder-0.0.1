import  React, {Component} from 'react';

import Website from '../components/Website';
import AdminSideBar from '../containers/AdminSideBar';

class NewWebsitePage extends Component {
	render() {
		return (
			<div className="flex flex-row full-height">
				<Website layout={ null } /> {/*Website will take a layout prop that will come from the db for existing Websites, null for new*/}
				<AdminSideBar />
			</div>
		)
	}
}

export default NewWebsitePage
//this page will need to connect.  