const { __ } = wp.i18n;

const { InspectorControls, PanelColorSettings } = wp.editor;

const { RangeControl } = wp.components;

const Inspector = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			SassyDividerPaddingTop,
			SassyDividerPaddingBottom
		},
		setAttributes
	} = props;

	return (
		<InspectorControls key="inspector">
			<PanelColorSettings
				title={__("Divider Options")}
				initialOpen={true}
				colorSettings={[
					{
						value: DividerColor,
						onChange: DividerColor =>
							setAttributes({ DividerColor: DividerColor }),
						label: __("Divider Color")
					}
				]}
			>
				<RangeControl
					label={__("Divider Height")}
					min={1}
					max={22}
					step={1}
					value={DividerHeight}
					onChange={DividerHeight => setAttributes({ DividerHeight })}
					initialPosition={0.1}
				/>
				<RangeControl
					label={__("Divider Width")}
					min={0}
					max={100}
					step={1}
					value={DividerWidth}
					onChange={DividerWidth => setAttributes({ DividerWidth })}
					initialPosition={0.1}
				/>
				<RangeControl
					label={__("Divider Padding Top")}
					min={10}
					max={50}
					step={1}
					value={SassyDividerPaddingTop}
					onChange={SassyDividerPaddingTop =>
						setAttributes({ SassyDividerPaddingTop })
					}
					initialPosition={0.1}
				/>
				<RangeControl
					label={__("Divider Padding Bottom")}
					min={10}
					max={50}
					step={1}
					value={SassyDividerPaddingBottom}
					onChange={SassyDividerPaddingBottom =>
						setAttributes({ SassyDividerPaddingBottom })
					}
					initialPosition={0.1}
				/>
			</PanelColorSettings>
		</InspectorControls>
	);
};

export default Inspector;
