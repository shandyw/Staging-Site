import "./assets/css/editor.scss";

// Import custom components
import SassySpacerEdit from "./components/SassySpacerEdit";
import SassySpacerSave from "./components/SassySpacerSave";

// Internalization
const { __ } = wp.i18n;

// Register BlockType
const { registerBlockType } = wp.blocks;

// Block Attributes
const blockAttributes = {
	SpacerHeight: {
		type: "number",
		default: 25
	},
	BorderVisibility: {
		type: "boolean",
		default: true
	}
};

registerBlockType("sassy-blocks/sassy-block-spacer", {
	title: __("SB Spacer"),
	description: __("Add a Spacer"),
	icon: "image-flip-vertical",
	category: "sassy-blocks",
	keywords: [__("spacer"), __("sassy"), __("sassy-blocks")],
	attributes: blockAttributes,
	edit: SassySpacerEdit,
	save: SassySpacerSave
});
