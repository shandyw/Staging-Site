// Import custom components
import SassyDividerEdit from "./components/SassyDividerEdit";
import SassyDividerSave from "./components/SassyDividerSave";

// Internalization
const { __ } = wp.i18n;

// RegisterBlockType
const { registerBlockType } = wp.blocks;

// Attributes for the Block
const blockAttributes = {
	DividerHeight: {
		type: "number",
		default: 1
	},
	DividerWidth: {
		type: "number",
		default: 50
	},
	DividerAlignment: {
		type: "string",
		default: "left"
	},
	DividerColor: {
		type: "string",
		default: "#000000"
	},
	SassyDividerPaddingTop: {
		type: "number",
		default: 10
	},
	SassyDividerPaddingBottom: {
		type: "number",
		default: 10
	}
};

registerBlockType("sassy-blocks/sassy-block-divider", {
	title: __("SB Divider"),
	description: __("Add a Divider"),
	icon: "minus",
	category: "sassy-blocks",
	keywords: [__("divider"), __("sassy"), __("sassy-blocks")],
	attributes: blockAttributes,
	edit: SassyDividerEdit,
	save: SassyDividerSave
});
