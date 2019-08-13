import "./assets/css/editor.scss";
import "./assets/css/style.scss";

// Import custom components
import SassyEditClass from "./components/SassyEditClass";
import SassySaveClass from "./components/SassySaveClass";

// Internationalization
const { __ } = wp.i18n;

// Registering block
const { registerBlockType } = wp.blocks;

const blockAttributes = {
	dropCapText: {
		type: "array",
		selector: ".sassy_drop_cap_text",
		source: "children"
	},
	drop_cap_position: {
		type: "string",
		default: "dropped"
	},
	dcFontSize: {
		type: "number",
		default: 1
	},
	dcTextColor: {
		type: "string",
		default: ""
	},
	buttonAlignment: {
		type: "string",
		default: "left"
	}
};

registerBlockType("sassy-blocks/sassy-block-drop-cap", {
	title: __("SB Drop Cap"),
	description: __("Add a DropCap, put your text on to the block!"),
	icon: "format-quote",
	category: "sassy-blocks",
	keywords: [__("sassy drop cap"), __("drop cap"), __("sassy")],
	attributes: blockAttributes,
	edit: SassyEditClass,
	save: SassySaveClass
});
