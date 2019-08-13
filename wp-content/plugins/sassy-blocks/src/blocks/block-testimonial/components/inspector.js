// Internationalization
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// import Block component
const { InspectorControls, PanelColorSettings, FontSizePicker } = wp.editor;

// import Inspector components
const {
	PanelBody,
	RangeControl,
	PanelColor,
	ColorPalette,
	SelectControl,
	ToggleControl
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	render() {
		const {
			attributes: {
				testimonialFontSize,
				testimonialBackgound,
				testimonialTextColor,
				testimonialImgRadius,
				lineHeight,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingBottom,
				marginLeft,
				marginRight,
				marginTop,
				marginBottom,
				letterSpacing,
				autohorInfoLayout,
				testimonialImgDiplay,
				sliderLimit
			},
			attributes,
			className,
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
			{ color: "#fff", name: "white" },
			{ color: "#EBEBEB", name: "gray" }
		];

		const sliders = [
			{ label: "One", value: 1 },
			{ label: "Two", value: 2 },
			{ label: "Three", value: 3 },
			{ label: "Four", value: 4 },
			{ label: "Five", value: 5 }
		];

		const autohorInfoLayouts = [
			{ label: "Left", value: "" },
			{ label: "Center", value: "middle-testimonial-info" },
			{ label: "Right", value: "right-testimonial-info" }
		];

		const fallbackFontSize = 12;

		return (
			<InspectorControls key="inspector">
				<PanelBody title={__("Layout")} initialOpen={false}>
					<SelectControl
						label="Author Info layout"
						value={autohorInfoLayout}
						options={autohorInfoLayouts}
						onChange={value => setAttributes({ autohorInfoLayout: value })}
					/>
					<SelectControl
						label="Slider"
						value={sliderLimit}
						options={sliders}
						onChange={value => setAttributes({ sliderLimit: value })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Typography")}
					initialOpen={false}
					className="testimonialTypography"
				>
					<p> Description Font Size</p>
					<FontSizePicker
						value={testimonialFontSize}
						fallbackFontSize={fallbackFontSize}
						onChange={value => setAttributes({ testimonialFontSize: value })}
					/>

					<RangeControl
						label={__("Line height")}
						value={lineHeight}
						onChange={value => setAttributes({ lineHeight: value })}
						min={0}
						max={24}
						step={1}
						initialPosition={0.1}
					/>

					<RangeControl
						label={__("Letter Spacing")}
						value={letterSpacing}
						onChange={value => setAttributes({ letterSpacing: value })}
						min={0}
						max={24}
						step={1}
						initialPosition={0.1}
					/>

					<PanelBody
						title={__("Padding")}
						initialOpen={false}
						className="subTitle"
					>
						<RangeControl
							label={__("Padding Left")}
							value={paddingLeft}
							onChange={value => setAttributes({ paddingLeft: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Padding Right")}
							value={paddingRight}
							onChange={value => setAttributes({ paddingRight: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Padding Top")}
							value={paddingTop}
							onChange={value => setAttributes({ paddingTop: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Padding Bottom")}
							value={paddingBottom}
							onChange={value => setAttributes({ paddingBottom: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
					</PanelBody>

					<PanelBody
						title={__("Margin")}
						initialOpen={false}
						className="subTitle"
					>
						<RangeControl
							label={__("Margin Left")}
							value={marginLeft}
							onChange={value => setAttributes({ marginLeft: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Margin Right")}
							value={marginRight}
							onChange={value => setAttributes({ marginRight: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Margin Top")}
							value={marginTop}
							onChange={value => setAttributes({ marginTop: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
						<RangeControl
							label={__("Margin Bottom")}
							value={marginBottom}
							onChange={value => setAttributes({ marginBottom: value })}
							min={0}
							max={24}
							step={1}
							initialPosition={0.1}
						/>
					</PanelBody>
				</PanelBody>

				<PanelColorSettings
					initialOpen={false}
					title={__("Color Customization")}
					colorSettings={[
						{
							label: __("Background Color"),
							value: testimonialBackgound,
							onChange: value => setAttributes({ testimonialBackgound: value })
						},

						{
							label: __("Text Color"),
							value: testimonialTextColor,
							onChange: value => setAttributes({ testimonialTextColor: value })
						}
					]}
				/>

				<PanelBody title={__("Image Options")} initialOpen={false}>
					<ToggleControl
						label={__("Show/Hide Testimonial Image")}
						checked={testimonialImgDiplay}
						onChange={value => {
							setAttributes({ testimonialImgDiplay: value });
						}}
					/>

					<SelectControl
						label="Image Shape"
						value={testimonialImgRadius}
						options={[
							{ label: "Square", value: "0%" },
							{ label: "Round", value: "50%" }
						]}
						onChange={value => setAttributes({ testimonialImgRadius: value })}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
