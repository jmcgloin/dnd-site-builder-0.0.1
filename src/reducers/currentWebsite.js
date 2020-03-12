//the website will be an array of elements that will just get joined for dispaly
/*
elements will look like this:
element = {
	elementName: "div",
	elementClasses: "flex flex-column",
	elementId: "example-div",
	elementKey: uuidV4(),
	elementPosition: [0], position within parent element
	elementParent: "uuidproducedkeyofparent" //the key of the parent element

}


*/

export default (state = "", action) => {
	switch(action.type) {
		case "ADD_WEBSITE_ELEMENT":
			//the action will contain the new element, its parent element (optional), its position (optional)
			//all classes and props will be contained in the string

	}
} //website will be a string of jsx