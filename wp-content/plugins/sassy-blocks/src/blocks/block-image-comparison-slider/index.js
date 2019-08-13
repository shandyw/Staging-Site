import "./assets/css/style.scss";

// Import custom components
import SassyBeforeAfterImageEdit from "./components/SassyBeforeAfterImageEdit";
import SassyBeforeAfterImageSave from "./components/SassyBeforeAfterImageSave";

// Internalization
const { __ } = wp.i18n;

// Register BlockType
const { registerBlockType } = wp.blocks;

// Block attributes
const blockAttributes = {
	BeforeImageUrl: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: ".sassy_before_img_comparison"
	},
	BeforeImageId: {
		type: "number"
	},
	BeforeImageAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: ".sassy_before_img_comparison"
	},
	BeforeImageFilter: {
		type: "string"
	},
	BeforeImageFilterPerc: {
		type: "number",
		default: 100
	},
	AfterImageUrl: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: ".sassy_after_img_comparison"
	},
	AfterImageId: {
		type: "number"
	},
	AfterImageAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: ".sassy_after_img_comparison"
	}
};

registerBlockType("sassy-blocks/sassy-before-and-after-image", {
	title: __("SB Image Comparison Slider"),
	description: __("Compare two images, as before and after"),
	icon: "format-image",
	category: "sassy-blocks",
	keywords: [__("before and after image comparison"), __("image"), __("sassy")],
	attributes: blockAttributes,
	edit: SassyBeforeAfterImageEdit,
	save: SassyBeforeAfterImageSave
});
