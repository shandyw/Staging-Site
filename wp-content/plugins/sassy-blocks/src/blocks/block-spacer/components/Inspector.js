const { __ } = wp.i18n;

const { InspectorControls, ColorPalette } = wp.editor;

// Import Inspector components
const { RangeControl, ToggleControl } = wp.components;

const Inspector = props => {
	const {
		attributes: { SpacerHeight, BorderVisibility },
		setAttributes
	} = props;

	return (
		<InspectorControls key="inspector">
			<RangeControl
				label={__("Spacer Height")}
				min={0}
				max={200}
				step={1}
				value={SpacerHeight}
				onChange={SpacerHeight => setAttributes({ SpacerHeight })}
			/>
			<ToggleControl
				label={__("Show Border")}
				checked={BorderVisibility}
				onChange={() => setAttributes({ BorderVisibility: !BorderVisibility })}
			/>
		</InspectorControls>
	);
};

export default Inspector;
