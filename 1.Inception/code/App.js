/*
 *
 * <div id="parent">
 *     <div id="child1">
 *          <h1>I am h1 tag</h1>
 *     </div>
 *     <div id="child1">
 *          <h2>I am h2 tag</h2>
 *     </div>
 * </div>
 *
 * 
 */

// It will create a JS object indicating React element
const parent = React.createElement(
	"div",
	{
		id: "parent",
	},
	[
		React.createElement(
			"div",
			{ id: "child1" },
			React.createElement("h1", {}, "I am h1 tag")
		),
		React.createElement(
			"div",
			{ id: "child2" },
			React.createElement("h2", {}, "I am h2 tag")
		),
	]
);

/* Creates a root element */
const root = ReactDOM.createRoot(document.getElementById("root"));

/*  render function is responsible to convert the react elements into the 
HTML tags which the browser can understand and puts in on the page */
root.render(parent);
