/**
 * Block: Sassy Block Heading
 */

// Internationalization
const { __ } = wp.i18n;

// import Edit
import NBHeadingEdit from "./components/edit.js";

// import NBHeadingSave
import NBHeadingSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("sassy-blocks/sb-heading", {
	title: __("SB Heading"),
	description: __("Add a heading text"),
	icon: "welcome-write-blog",
	category: "sassy-blocks",
	keywords: [__("headnig"), __("highlight"), __("text")],

	attributes: {
		heading: {
			type: "array",
			source: "children",
			selector: ".heading"
		},
		headingTag: {
			type: "string",
			default: "h1"
		},
		headingColor: {
			type: "string"
		},
		headingFontSize: {
			type: "number"
		},
		headingAlignment: {
			type: "string"
		}
	},

	// Render Edit components
	edit: NBHeadingEdit,
	// Render Save Component
	save: NBHeadingSave
});
