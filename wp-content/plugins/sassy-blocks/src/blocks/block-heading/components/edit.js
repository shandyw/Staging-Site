//  Import Block Dependency component
import Inspector from "./inspector.js";

// import makeStyle compoent
import makeStyle from "./makeStyle.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	RichText,
	BlockControls,
	AlignmentToolbar

	//BlockAlignmentToolbar,
} = wp.editor;

// Register components
const { Dashicon, Toolbar } = wp.components;

export default class NBHeadingEdit extends Component {
	render() {
		const {
			attributes: {
				heading,
				headingTag,
				headingColor,
				headingFontSize,
				headingAlignment
			},
			attributes,
			className,
			setAttributes
		} = this.props;

		// Heading style
		const headingStyle = {
			fontSize:
				headingFontSize === "" || headingFontSize === undefined
					? ""
					: `${headingFontSize}px`,
			color: headingColor,
			textAlign: headingAlignment
		};

		return [
			<Inspector {...{ setAttributes, ...this.props }} />,

			<div className="sb-heading">
				<BlockControls>
					<AlignmentToolbar
						value={headingAlignment}
						onChange={value => setAttributes({ headingAlignment: value })}
					/>
				</BlockControls>

				<RichText
					tagName={headingTag}
					className="heading"
					value={heading}
					placeholder={__("Heading Text....")}
					keepPlaceholderOnFocus
					onChange={value => setAttributes({ heading: value })}
					style={makeStyle(headingStyle)}
				/>
			</div>
		];
	}
}
