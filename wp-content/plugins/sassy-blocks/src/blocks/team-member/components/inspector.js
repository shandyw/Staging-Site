/*****
 * Inspector Controls Component
 ****/

const { __ } = wp.i18n;
const { Component } = wp.element;

const { InspectorControls, FontSizePicker, PanelColorSettings} = wp.editor;

const { PanelBody, ToggleControl, SelectControl,RangeControl } = wp.components;




export default class Inspector extends Component{
    constructor( props ) {
        super( ...arguments );
    }
    
    render(){
        const {
            attributes: { nameFz, nameColor, fontSize, designationColor, facebook, twitter, instagram, pinterest, google, youtube, github, website, linkedin, dropcap, buttonStyle, socialBgColor, socialIconColor, socialIconFz,socialBorderColor, socialBorderTopRDropCap, boxBgColor, boxBorderColor, columns, socialBoxHeight, socialBoxWidth, socialBoxLineHeight,
            },
            setAttributes,
            attributes,
        } = this.props;
 
  
        
        const nameFallbackFontSize = 24;
        const fallbackFontSize = 14;

        const buttonStyleOptions = [
            { label: __('Icon Only'), value: 'icon'  },
            { label: __('Text Only'), value: 'text'  },
        ];
        
        const iconFallbackFontSize = 16;
        
        const columnsOptions = [
            { label: __('One Column'), value: '1'  },
            { label: __('Two Column'), value: '2'  },
            { label: __('Three Column'), value: '3'  },
        ];

        return(
            <InspectorControls key="inspector">
                <SelectControl
                    label = { __( 'Column Number' ) }
                    options={ columnsOptions }
                    value={ columns }
                    onChange={(newValue) => { setAttributes({columns: newValue}) }}
                />
           
                <PanelBody
                    title={__('Name Settings')}
                    initialOpen={ false }
                >
                    <PanelColorSettings
                        title={ __( 'Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: nameColor,
                                onChange: value => setAttributes( { nameColor: value } ),
                                label: __("Color")
                            }
                        ]}
                    />
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        fallbackFontSize = {nameFallbackFontSize}
                        value={nameFz}
                        onChange={(value) => setAttributes({nameFz: value})}
                    />
                    </PanelBody>
                </PanelBody>

                <PanelBody
                    title={__('Designation Settings')}
                    initialOpen={ false }
                >
                    <PanelColorSettings
                        title={ __( 'Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: designationColor,
                                onChange: value => setAttributes( { designationColor: value } ),
                                label: __("Color")
                            }
                        ]}
                    />
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        fallbackFontSize = {fallbackFontSize}
                        value={fontSize}
                        onChange={(value) => setAttributes({fontSize: value})}
                    />
                    </PanelBody>
                   
                </PanelBody>
                <PanelBody
                    title = { __('Social Settings') }
                    initialOpen = { false }
                >
                    <ToggleControl
                        label = { __('Show/Hide Social') }
                        checked = { !!dropcap }
                        onChange = { value => setAttributes( { dropcap: value } ) }
                    />
                    <ToggleControl
                        label = { __('Show/Hide Border Top') }
                        checked = { !!socialBorderTopRDropCap }
                        onChange = { value => setAttributes( { socialBorderTopRDropCap: value } ) }
                    />
                    <RangeControl
                        label = { __('Icon Box Height' ) }
                        value = { socialBoxHeight }
                        min = { 20 }
                        max = { 100 }
                        onChange = { ( value ) => setAttributes({ socialBoxHeight: value }) }
                    />
                    <RangeControl
                        label = { __('Icon Box Width' ) }
                        value = { socialBoxWidth }
                        min = { 20 }
                        max = { 100 }
                        onChange = { ( value ) => setAttributes({ socialBoxWidth: value }) }
                    />
                    <RangeControl
                        label = { __('Icon Box Line Height' ) }
                        value = { socialBoxLineHeight }
                        min = { 20 }
                        max = { 100 }
                        onChange = { ( value ) => setAttributes({ socialBoxLineHeight: value }) }
                    />
                    <PanelColorSettings
                        title={ __( 'Background Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: socialBgColor,
                                onChange: value => setAttributes( { socialBgColor: value } ),
                                label: __("Background Color")
                            }
                        ]}
                    />

                    <PanelColorSettings
                        title={ __( 'Border Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: socialBorderColor,
                                onChange: value => setAttributes( { socialBorderColor: value } ),
                                label: __("Border Color")
                            }
                        ]}
                    />

                    <PanelColorSettings
                        title={ __( 'Icon Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: socialIconColor,
                                onChange: value => setAttributes( { socialIconColor: value } ),
                                label: __("Icon Color")
                            }
                        ]}
                    />
                    
                    <PanelBody
                        title={__('Font Size')}
                        initialOpen={ false }
                    >
                    <FontSizePicker
                        fallbackFontSize = {iconFallbackFontSize}
                        value={socialIconFz}
                        onChange={(value) => setAttributes({socialIconFz: value})}
                    />
                    </PanelBody>
                </PanelBody>
                <PanelBody
                    title={__('Box Settings')}
                    initialOpen={ false }
                >
                    <PanelColorSettings
                        title={ __( 'Background Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: boxBgColor,
                                onChange: value => setAttributes( { boxBgColor: value } ),
                                label: __("Background Color")
                            }
                        ]}
                    />

                    <PanelColorSettings
                        title={ __( 'Border Color' ) }
                        initialOpen={ false }
                        colorSettings={[
                            {
                                value: boxBorderColor,
                                onChange: value => setAttributes( { boxBorderColor: value } ),
                                label: __("Border Color")
                            }
                        ]}
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}
