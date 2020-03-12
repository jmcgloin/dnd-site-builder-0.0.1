import  React, {Component} from 'react';

class AdminSideBar extends Component {
	state= {
		currentElement: {
			elementName: "",
			elementClasses: [],
			elementProps: [],
			elementBehavior: [],
			elementCallbacks: [],
			elementPosition: []
		}
	}
	handleButtonClick = ({ target }) => {
		
	}
	renderElementDialog = type => `<${type}Dialog />`;
	render() {
		return (
				<div className="admin-sidebar full-height flex flex-column flex-start" >
					<div className="button-container">
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Div">div</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H1">h1</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H2">h2</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H3">h3</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Paragraph">paragraph</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Span">span</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Image">image</button>
					</div>
					<div className="component-dialog flex-major">
						Component dialog goes here
					</div>
					<div className="save-cancel flex flex-around">
						<button className="button rounded">Save</button>
						<button className="button rounded">Discard</button>
					</div>
				</div>
		)
	}
}

export default AdminSideBar





// elementName: "div",
// 	elementClasses: "flex flex-column",
// 	elementProps: [{ id: "exampleDiv" },{ innerHtml: "this is an example div" }],
// 	elementBehavior: [{ onMouseOver: handleMouseOver }],
// 	elementCallbacks: [
// 		{
// 			handleMouseOver: ({ target }) => {
// 				this.setState({
// 					...this.state
// 					[`${target.id}-moused`]: true
// 				})
// 			}
// 		}
// 	],
// 	elementPosition: [0], // array of positions or parents, if length = 1, child of body, otherwise
// 												// oth is root ancestor, 1th is next ancestor, until nth is position in parent