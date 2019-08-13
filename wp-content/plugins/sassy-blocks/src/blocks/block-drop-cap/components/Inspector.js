const { __ } = wp.i18n;

const { InspectorControls } = wp.editor;

// Import Inspector components
const { PanelBody, RangeControl, SelectControl } = wp.components;

const Inspector = props => {
	const {
		attributes: { dcFontSize, drop_cap_position },
		setAttributes
	} = props;

	const drop_cap_positions = [
		{ value: "normal", label: __("Normal") },
		{ value: "dropped", label: __("Dropped") },
		{ value: "in_margin", label: __("In Margin") }
	];

	return (
		<InspectorControls key="inspector">
			<PanelBody title={__("Position")} initialOpen={false}>
				<SelectControl
					label={__("Position of Drop Cap")}
					value={drop_cap_position}
					options={drop_cap_positions.map(({ value, label }) => ({
						value: value,
						label: label
					}))}
					onChange={drop_cap_position =>
						setAttributes({
							drop_cap_position
						})
					}
				/>
			</PanelBody>

			<PanelBody title={__("Options")} initialOpen={false}>
				<RangeControl
					label={__("Drop Cap Font Size")}
					min={1}
					max={7}
					step={1}
					value={dcFontSize}
					onChange={dcFontSize => setAttributes({ dcFontSize })}
					initialPosition={0.01}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
