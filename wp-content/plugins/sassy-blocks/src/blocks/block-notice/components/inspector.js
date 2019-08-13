// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls, FontSizePicker } = wp.editor;

// import Inspector components
const {
	PanelBody,
	PanelColor,
	ColorPalette,
	SelectControl,
	ColorIndicator,
	ToggleControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				noticeTitleColor,
				noticBackground,
				noticBorderColor,
				noticeFontsize,
				noticeIcon
			},
			setAttributes
		} = this.props;

		const colors = [
			{ color: "#00d1b2", name: "teal" },
			{ color: "#3373dc", name: "royal blue" },
			{ color: "#209cef", name: "sky blue" },
			{ color: "#22d25f", name: "green" },
			{ color: "#ffdd57", name: "yellow" },
			{ color: "#ff3860", name: "pink" },
			{ color: "#7941b6", name: "purple" },
			{ color: "#392F43", name: "black" },
			{ color: "#fff", name: "white" }
		];

		const fallbackFontSize = 12;

		const noticeIcons = [
			{ label: "Error", value: "cancel" },
			{ label: "Warning", value: "exclamation" },
			{ label: "Update", value: "refresh" },
			{ label: "Info", value: "info" }
		];

		return (
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label="Icon"
						value={noticeIcon}
						options={noticeIcons}
						onChange={value => setAttributes({ noticeIcon: value })}
					/>
				</PanelBody>

				<PanelBody>
					<FontSizePicker
						value={noticeFontsize}
						fallbackFontSize={fallbackFontSize}
						onChange={value => setAttributes({ noticeFontsize: value })}
					/>
				</PanelBody>

				<PanelBody>
					<p>
						Background Color: <ColorIndicator colorValue={noticBackground} />
					</p>

					<ColorPalette
						label={__("Backbround Color")}
						colors={colors}
						value={noticBackground}
						onChange={value => setAttributes({ noticBackground: value })}
					/>
					<br />
				</PanelBody>

				<PanelBody>
					<p>
						Border Color: <ColorIndicator colorValue={noticBorderColor} />
					</p>

					<ColorPalette
						label={__("Title Color")}
						colors={colors}
						value={noticBorderColor}
						onChange={value => setAttributes({ noticBorderColor: value })}
					/>
					<br />
				</PanelBody>

				<PanelBody>
					<p>
						Title Color: <ColorIndicator colorValue={noticeTitleColor} />
					</p>

					<ColorPalette
						label={__("Title Color")}
						colors={colors}
						value={noticeTitleColor}
						onChange={value => setAttributes({ noticeTitleColor: value })}
					/>
					<br />
				</PanelBody>
			</InspectorControls>
		);
	}
}
