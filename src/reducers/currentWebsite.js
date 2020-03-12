//the website will be an array of elements that will just get joined for dispaly
/*
elements will look like this:
element = {
	elementName: "div",
	elementClasses: "flex flex-column",
	elementProps: [{ id: "exampleDiv" },{ innerHtml: "this is an example div" }],
	elementBehavior: [{ onMouseOver: handleMouseOver }],
	elementCallbacks: [
		{
			handleMouseOver: ({ target }) => {
				this.setState({
					...this.state
					[`${target.id}-moused`]: true
				})
			}
		}
	],
	elementPosition: [0], // array of positions or parents, if length = 1, child of body, otherwise
												// oth is root ancestor, 1th is next ancestor, until nth is position in parent
	
}


*/

export default (state = "", action) => {
	switch(action.type) {
		case "ADD_WEBSITE_ELEMENT":
			//the action will contain the new element, its parent element (optional), its position (optional)
			//all classes and props will be contained in the string

	}
} //website will be a string of jsx