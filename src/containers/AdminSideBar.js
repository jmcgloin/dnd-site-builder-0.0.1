import  React, {Component} from 'react';
import DivDialog from '../components/component-dialogs/DivDialog'

class AdminSideBar extends Component {
	state= {
		currentElement: {}
	}
	handleButtonClick = ({ target }) => {
		const { name } = target
		console.log(name)
		this.setState({
			...this.state,
			currentElement: {
				...this.state.currentElement,
				elementName: name
			}
		})
	}
	renderElementDialog = () => {
		const componentDialogs = {
			Div: <DivDialog handleDiscard={ this.handleDiscardCurrentElement } />
		}
		return componentDialogs[this.state.currentElement.elementName]
	}
	handleDiscardCurrentElement = () => {
		this.setState({ currentElement: {} })
	}
	render() {
		return (
				<div className="admin-sidebar flex flex-column flex-start" >
					<div className="button-container flex flex-wrap flex-row">
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Div">div</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H1">h1</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H2">h2</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="H3">h3</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Paragraph">paragraph</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Span">span</button>
						<button className="button rounded" type="click" onClick={ this.handleButtonClick } name="Image">image</button>
					</div>
					<div className="component-dialog flex-major">
						{ this.renderElementDialog() }
					</div>
					<div className="save-cancel flex flex-around flex-wrap">
						<button className="button dialog-button rounded">Save</button>
						<button className="button dialog-button rounded">Discard</button>
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