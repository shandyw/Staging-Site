/**
 * Block: Sassy Block Profile
 */

//  Import Block Dependency component
// import Inspector from "./components/inspector.js";
// import SocialIcons from "./components/social.js";

// Edit Component
import NBAuthorProfileEdit from "./components/edit.js";

// save Component
import NBAuthorProfileSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register Block
const { registerBlockType } = wp.blocks;

registerBlockType("sassy-blocks/author-profile", {
	title: __("SB Author Profile"),
	description: __("Add your profile infomation"),
	icon: "admin-users",
	category: "sassy-blocks",
	keywords: [__("profile"), __("avator"), __("author")],

	attributes: {
		title: {
			type: "string",
			source: "text",
			selector: ".title"
		},
		designation: {
			type: "string",
			source: "text",
			selector: ".designation"
		},
		description: {
			type: "array",
			source: "children",
			selector: ".desc"
		},
		authorImgUrl: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: ".authorImg"
		},
		authorImgAlt: {
			type: "string",
			attribute: "alt",
			selector: ".authorImg"
		},
		authorImageId: {
			type: "number"
		},
		profileBackground: {
			type: "string"
		},
		facebook: {
			type: "url"
		},
		facebookColor: {
			type: "string"
		},
		twitter: {
			type: "url"
		},
		twitterColor: {
			type: "string"
		},
		googlePlus: {
			type: "url"
		},
		googlePlusColor: {
			type: "string"
		},

		linkedin: {
			type: "url"
		},
		linkedinColor: {
			type: "string"
		},

		email: {
			type: "url"
		},
		emailColor: {
			type: "string"
		},

		titleFontSize: {
			type: "number"
		},
		titleColor: {
			type: "string"
		},
		designationFontSize: {
			type: "number"
		},
		designationColor: {
			type: "string"
		},
		descriptionFontSize: {
			type: "number"
		},
		descriptionColor: {
			type: "string"
		},
		imageShape: {
			type: "string",
			default: "50%"
		},
		descriptionAlign: {
			type: "string",
			default: ""
		},
		profileLayout: {
			type: "string",
			default: ""
		}
	},

	// Render Edit components
	edit: NBAuthorProfileEdit,
	// Render Save Component
	save: NBAuthorProfileSave
});
