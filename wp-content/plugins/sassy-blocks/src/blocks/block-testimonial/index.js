/**
 * Block: Sassy Block Testimonial
 */

// Internationalization
const { __ } = wp.i18n;

// import Edit
import SBTestimonialEdit from "./components/edit.js";

// import SBTestimonialSave
import SBTestimonialSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("sassy-blocks/sb-testimonial", {
	title: __("SB Testimonial"),
	description: __("Add a user testimonial with a name and title."),
	icon: "format-quote",
	category: "sassy-blocks",
	keywords: [__("tes"), __("feedback"), __("sassy")],

	attributes: {
		// testimonial 1
		testimonialContent0: {
			type: "array",
			source: "children",
			selector: ".nbContent0"
		},
		testimonialName0: {
			type: "array",
			source: "children",
			selector: ".nbName0"
		},
		testimonialTitle0: {
			type: "array",
			source: "children",
			selector: ".nbTitle0"
		},
		testimonialImageUrl0: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image0"
		},
		testimonialAlt0: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image0",
			default: "testimonai image"
		},
		testimonialImgId0: {
			type: "number"
		},
		// testimonial 2
		testimonialContent1: {
			type: "array",
			source: "children",
			selector: ".nbContent1"
		},
		testimonialName1: {
			type: "array",
			source: "children",
			selector: ".nbName1"
		},
		testimonialTitle1: {
			type: "array",
			source: "children",
			selector: ".nbTitle1"
		},
		testimonialImageUrl1: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image1"
		},
		testimonialAlt1: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image1",
			default: "testimonai image"
		},
		testimonialImgId1: {
			type: "number"
		},

		// testimonial 3
		testimonialContent2: {
			type: "array",
			source: "children",
			selector: ".nbContent2"
		},
		testimonialName2: {
			type: "array",
			source: "children",
			selector: ".nbName2"
		},
		testimonialTitle2: {
			type: "array",
			source: "children",
			selector: ".nbTitle2"
		},
		testimonialImageUrl2: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image2"
		},
		testimonialAlt2: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image2",
			default: "testimonai image"
		},
		testimonialImgId2: {
			type: "number"
		},

		//testimonial 4
		testimonialContent3: {
			type: "array",
			source: "children",
			selector: ".nbContent3"
		},
		testimonialName3: {
			type: "array",
			source: "children",
			selector: ".nbName3"
		},
		testimonialTitle3: {
			type: "array",
			source: "children",
			selector: ".nbTitle3"
		},
		testimonialImageUrl3: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image3"
		},
		testimonialAlt3: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image3",
			default: "testimonai image"
		},
		testimonialImgId3: {
			type: "number"
		},

		//tetimonial 5
		testimonialContent4: {
			type: "array",
			source: "children",
			selector: ".nbContent4"
		},
		testimonialName4: {
			type: "array",
			source: "children",
			selector: ".nbName4"
		},
		testimonialTitle4: {
			type: "array",
			source: "children",
			selector: ".nbTitle4"
		},
		testimonialImageUrl4: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".testimonial_image4"
		},
		testimonialAlt4: {
			type: "string",
			attribute: "alt",
			selector: ".testimonial_image4",
			default: "testimonai image"
		},
		testimonialImgId4: {
			type: "number"
		},

		testimonialImgRadius: {
			default: "50%"
		},

		testimonialAlignment: {
			type: "string",
			default: "center"
		},

		testimonialFontSize: {
			type: "number"
		},
		testimonialBackgound: {
			type: "string"
		},

		testimonialTextColor: {
			type: "string"
		},
		lineHeight: {
			type: "number"
		},
		paddingLeft: {
			type: "number"
		},
		paddingRight: {
			type: "number"
		},
		paddingTop: {
			type: "number"
		},
		paddingBottom: {
			type: "number"
		},
		marginLeft: {
			type: "number"
		},
		marginRight: {
			type: "number"
		},
		marginTop: {
			type: "number"
		},
		marginBottom: {
			type: "number"
		},

		letterSpacing: {
			type: "number"
		},
		autohorInfoLayout: {
			type: "string",
			default: "middle-testimonial-info"
		},
		testimonialImgDiplay: {
			type: "boolean",
			default: true
		},

		sliderLimit: {
			type: "select",
			default: 1
		}
	},

	// Render Edit components
	edit: SBTestimonialEdit,
	// Render Save Component
	save: SBTestimonialSave
});
