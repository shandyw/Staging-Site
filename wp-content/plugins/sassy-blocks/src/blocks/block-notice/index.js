/**
 * Block: Sassy Block Notice
 */

//  Import Block Dependency component
import NBNoticeEdit from "./components/edit.js";
import NBNoticeSave from "./components/save.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register Block
const { registerBlockType } = wp.blocks;

// Register editor components
const {
	RichText,
	AlignmentToolbar,
	MediaUpload,
	BlockControls
	//BlockAlignmentToolbar,
} = wp.editor;

// Register components
const { Button } = wp.components;

registerBlockType("sassy-blocks/sb-notice", {
	title: __("SB Notice"),
	description: __("Add a text notice"),
	icon: "admin-post",
	category: "sassy-blocks",
	keywords: [__("notice"), __("announcement"), __("notification")],

	attributes: {
		title: {
			type: "array",
			source: "children",
			selector: ".notice_title"
		},

		noticeTitleColor: {
			type: "string"
		},

		noticBackground: {
			type: "string"
		},

		noticBorderColor: {
			type: "string"
		},

		noticeFontsize: {
			type: "number"
		},
		noticeIcon: {
			type: "string",
			default: "cancel"
		}
	},

	// edit
	edit: NBNoticeEdit,
	// save
	save: NBNoticeSave
});
