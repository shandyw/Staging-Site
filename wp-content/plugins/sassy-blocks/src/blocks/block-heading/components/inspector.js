// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls, FontSizePicker } = wp.editor;

// import Inspector components
const {
	PanelBody,
	SelectControl,
	PanelColor,
	ColorPalette,
	ColorIndicator
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				headingTag,
				headingColor,
				headingFontSize,
				headingAlignment
			},
			className,
			setAttributes
		} = this.props;

		const headings = [
			{ label: "H1", value: "h1" },
			{ label: "H2", value: "h2" },
			{ label: "H3", value: "h3" },
			{ label: "H4", value: "h4" },
			{ label: "H5", value: "h5" },
			{ label: "H6", value: "h6" }
		];

		const fallbackFontSize = 12;

		const colors = [
			{ color: "#00d1b2", name: "teal" },
			{ color: "#3373dc", name: "royal blue" },
			{ color: "#209cef", name: "sky blue" },
			{ color: "#22d25f", name: "green" },
			{ color: "#ffdd57", name: "yellow" },
			{ color: "#ff3860", name: "pink" },
			{ color: "#7941b6", name: "purple" },
			{ color: "#392F43", name: "black" },
			{ color: "#fff", name: "white" },
			{ color: "#EBEBEB", name: "gray" }
		];

		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<SelectControl
						label={__("Tag")}
						value={headingTag}
						options={headings}
						onChange={value => setAttributes({ headingTag: value })}
					/>
				</PanelBody>

				<PanelBody>
					<FontSizePicker
						value={headingFontSize}
						fallbackFontSize={fallbackFontSize}
						onChange={value => setAttributes({ headingFontSize: value })}
					/>
				</PanelBody>

				<PanelBody>
					<p>
						Color: <ColorIndicator colorValue={headingColor} />
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={value => setAttributes({ headingColor: value })}
					/>
					<br />
				</PanelBody>
			</InspectorControls>
		);
	}
}
