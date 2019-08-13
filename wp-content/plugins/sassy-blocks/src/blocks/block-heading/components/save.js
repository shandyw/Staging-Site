// import makeStyle compoent
import makeStyle from "./makeStyle.js";

// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register editor components
const { RichText } = wp.editor;

/**
 *  Save Component
 */
export default class NBHeadingSave extends Component {
	render() {
		const {
			heading,
			headingTag,
			headingColor,
			headingFontSize,
			headingAlignment
		} = this.props.attributes;

		// Heading style
		const headingStyle = {
			fontSize:
				headingFontSize === "" || headingFontSize === undefined
					? ""
					: `${headingFontSize}px`,
			color: headingColor,
			textAlign: headingAlignment
		};

		return (
			heading && (
				<div className="sb-heading">
					<RichText.Content
						tagName={headingTag}
						className="heading"
						value={heading}
						style={makeStyle(headingStyle)}
					/>
				</div>
			)
		);
	}
}
