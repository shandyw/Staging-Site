const { __ } = wp.i18n;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.editor;

// Import Inspector components
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	FontSizePicker
} = wp.components;

const Inspector = props => {
	// Setup the attributes
	const {
		buttonBackgroundColor,
		btnTextColor,
		buttonSize,
		btnShape,
		buttonTarget,
		ctaTextFontSize,
		ctaBackgroundColor,
		ctaTextColor
	} = props.attributes;

	const { setAttributes } = props;

	const btnShapeOptions = [
		{ value: "0px", label: __("Square") },
		{ value: "5px", label: __("Rounded Square") },
		{ value: "100px", label: __("Circular") }
	];

	const buttonSizeOptions = [
		{ label: "Normal", value: "" },
		{ label: "Small", value: ".75em" },
		{ label: "Medium", value: "1.25em" },
		{ label: "Large", value: "1.5em" }
	];

	const fontSizes = [
		{
			name: __("Small"),
			slug: "small",
			size: 12
		},
		{
			name: __("Medium"),
			slug: "medium",
			size: 16
		},
		{
			name: __("Large"),
			slug: "large",
			size: 26
		}
	];

	const fallbackFontSize = 16;

	return (
		<InspectorControls key="inspector">
			<PanelBody title={__("Text Options")} initialOpen={false}>
				<FontSizePicker
					fontSizes={fontSizes}
					value={ctaTextFontSize}
					fallbackFontSize={fallbackFontSize}
					onChange={ctaTextFontSize => setAttributes({ ctaTextFontSize })}
				/>

				<PanelColorSettings
					title={__("Text Color")}
					initialOpen={true}
					colorSettings={[
						{
							value: ctaTextColor,
							onChange: ctaTextColor =>
								setAttributes({ ctaTextColor: ctaTextColor }),
							label: __("Text Color")
						}
					]}
				/>
			</PanelBody>
			<PanelColorSettings
				title={__("Background Options")}
				initialOpen={false}
				colorSettings={[
					{
						value: ctaBackgroundColor,
						onChange: ctaBackgroundColor =>
							setAttributes({ ctaBackgroundColor: ctaBackgroundColor }),
						label: __("Background Color")
					}
				]}
			/>

			<PanelBody title={__("Button Options")} initialOpen={false}>
				<ToggleControl
					label={__("Open link in new window")}
					checked={buttonTarget}
					onChange={() => setAttributes({ buttonTarget: !buttonTarget })}
				/>

				<SelectControl
					label={__("Button Size")}
					value={buttonSize}
					options={buttonSizeOptions.map(({ value, label }) => ({
						value: value,
						label: label
					}))}
					onChange={buttonSize => setAttributes({ buttonSize })}
				/>

				<SelectControl
					label={__("Button Shape")}
					value={btnShape}
					options={btnShapeOptions.map(({ value, label }) => ({
						value: value,
						label: label
					}))}
					onChange={btnShape => setAttributes({ btnShape })}
				/>

				<PanelColorSettings
					title={__("Button Color Customization")}
					initialOpen={true}
					colorSettings={[
						{
							value: buttonBackgroundColor,
							onChange: buttonBackgroundColor =>
								setAttributes({ buttonBackgroundColor }),
							label: __("Button Background Color")
						},
						{
							value: btnTextColor,
							onChange: btnTextColor => setAttributes({ btnTextColor }),
							label: __("Button Text Color")
						}
					]}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
