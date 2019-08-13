const { Component, Fragment } = wp.element;
const {__} = wp.i18n;
const { MediaUpload, InspectorControls, BlockControls, PanelColorSettings} = wp.editor;
const {Button, TextControl, IconButton, Dashicon, BaseControl, PanelBody, RangeControl, ToggleControl, Toolbar, SelectControl} = wp.components;

export default class VideoBlockEdit extends Component{
    
    constructor( props ){
        super( ...arguments );
    }
    
    render(){
        
        const { attributes:{ previewImage, previewImageID, videoWidth, videoHeight, videoUrl, overlayColor, playButtonSize, playButtonColor, playIcons, overlayColorOpacity, isOverlayOpacity, playButtonBgColor, playButtonWidth, playButtonHeight, playButtonLineHeight, playButtonBorderColor}, attributes, className , setAttributes, isSelected } = this.props;
        
        const opacityOptions = [
            { label: __('0.1'), value: 0.1 },
            { label: __('0.2'), value: 0.2 },
            { label: __('0.3'), value: 0.3 },
            { label: __('0.4'), value: 0.4 },
            { label: __('0.5'), value: 0.5 },
            { label: __('0.6'), value: 0.6 },
            { label: __('0.7'), value: 0.7 },
            { label: __('0.8'), value: 0.8 },
            { label: __('0.9'), value: 0.9 },
            { label: __('1'), value: 1 },
        ];

        const btnWrapperStyle = {
            height: (videoHeight) ? `${videoHeight}px` : undefined,
            width: (videoWidth) ? `${videoWidth}px` : undefined,
            backgroundColor: (overlayColor) ? `${overlayColor}` : undefined,
        };

        const previewImageStyle = {
            backgroundImage: previewImage ? `url(${previewImage})` : undefined,
            opacity: ( overlayColorOpacity && !!isOverlayOpacity) ? `${overlayColorOpacity}` : undefined,
        };

        const playButtonWrappperStyle = {
            height : (playButtonHeight) ? `${playButtonHeight}px` : undefined,
            fontSize : (playButtonSize) ? `${playButtonSize}px` : undefined,
            color : (playButtonColor) ? `${playButtonColor}` : undefined,
            width : (playButtonWidth) ? `${playButtonWidth}px` : undefined,
            lineHeight : (playButtonLineHeight) ? `${playButtonLineHeight}px` : undefined,
            backgroundColor : (playButtonBgColor) ? `${playButtonBgColor}` : undefined,
            borderColor : (playButtonBorderColor) ? `${playButtonBorderColor}` : undefined,
        };

        // const playButtonStyle = {
        //     height : (playButtonHeight) ? `${playButtonHeight}px` : undefined,
        //     fontSize : (playButtonSize) ? `${playButtonSize}px` : undefined,
        //     color : (playButtonColor) ? `${playButtonColor}` : undefined,
        // };


        const playIconsOptions = [
            { label: __('Controls Play'), value: 'controls-play'  },
            { label: __('Video Alt 1'), value: 'video-alt3'  },
            { label: __('Video Alt 2'), value: 'video-alt2'  },
            { label: __('Video Alt 3'), value: 'video-alt'  },
            { label: __('Format Video'), value: 'format-video'  },
        ];
        
        return(
            <Fragment>
                {!!previewImage &&
                <BlockControls>
                <Toolbar>
                    <MediaUpload
                        onSelect={(media) => setAttributes({previewImage: media.url, previewImageID: media.id})}
                        type="image"
                        value={previewImageID}
                        render={({open}) => (
                            <IconButton
                                label={__('Edit Image')}
                                icon={'edit'}
                                onClick={open}
                            />
                        )}
                    />
                    <IconButton
                        label={__('Remove image')}
                        icon="trash"
                        onClick={() => setAttributes({previewImage: '', previewImageID: ''})}
                    />
                </Toolbar>
                </BlockControls>
                }
               <InspectorControls>
                   <PanelBody title={__('Video Settings')}>
                       <RangeControl
                           label = { __('Video Width' ) }
                           value = { videoWidth}
                           min = { 100 }
                           max = { 1000 }
                           onChange = { ( value ) => setAttributes({ videoWidth: value }) }
                       />
                       <RangeControl
                           label = { __('Video Height' ) }
                           value = { videoHeight }
                           min = { 100 }
                           max = { 1000 }
                           onChange = { ( value ) => setAttributes({ videoHeight: value }) }
                       />
                       <PanelColorSettings
                           title={ __( 'Overlay Color' ) }
                           initialOpen={ false }
                           colorSettings={[
                               {
                                   value: overlayColor,
                                   onChange: value => setAttributes( { overlayColor: value } ),
                                   label: __("Overlay Color")
                               }
                           ]}
                       />
                       <ToggleControl
                           label = { __('Show/Hide Overlay Opacity') }
                           checked = { !!isOverlayOpacity }
                           onChange = { value => setAttributes( { isOverlayOpacity: value } ) }
                       />
                       {!!isOverlayOpacity &&
                       <SelectControl
                           label={__('Opacity')}
                           options={opacityOptions}
                           value={overlayColorOpacity}
                           onChange={(newValue) => {
                               setAttributes({overlayColorOpacity: newValue})
                           }}
                       />
                       }
                   </PanelBody>
                   <PanelBody title={__('Play Button Settings')} >
                       <BaseControl label={ __( 'Icons' ) }>
                           <div className="sb-icon-items-wrapper">
                               {
                                   playIconsOptions.map( ( item, index ) => (
                                       <div className="sb-icon-item">
                                            <span onClick={ ( ) => setAttributes({ playIcons:  item.value }) }>
                                            <Dashicon icon={item.value}/>
                                            </span>
                                       </div>
                                   ))
                               }
                           </div>
                       </BaseControl>
                  
                       <RangeControl
                           label = { __('Button Size' ) }
                           value = { playButtonSize}
                           min = { 20 }
                           max = { 200 }
                           onChange = { ( value ) => setAttributes({ playButtonSize: value }) }
                       />

                       <PanelColorSettings
                           title={ __( 'Button Color' ) }
                           initialOpen={ false }
                           colorSettings={[
                               {
                                   value: playButtonColor,
                                   onChange: value => setAttributes( { playButtonColor: value } ),
                                   label: __("Button Color")
                               }
                           ]}
                       />

                       <PanelColorSettings
                           title={ __( 'Button Background Color' ) }
                           initialOpen={ false }
                           colorSettings={[
                               {
                                   value: playButtonBgColor,
                                   onChange: value => setAttributes( { playButtonBgColor: value } ),
                                   label: __("Button Background Color")
                               }
                           ]}
                       />
                       
                       <RangeControl
                           label={__('Button Width')}
                           value={playButtonWidth}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonWidth: value})}
                       />
        
                       <RangeControl
                           label={__('Button Height')}
                           value={playButtonHeight}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonHeight: value})}
                       />
                 
                       <RangeControl
                           label={__('Button Line Height')}
                           value={playButtonLineHeight}
                           min={20}
                           max={200}
                           onChange={(value) => setAttributes({playButtonLineHeight: value})}
                       />

                       <PanelColorSettings
                           title={ __( 'Button Outer Border Color' ) }
                           initialOpen={ false }
                           colorSettings={[
                               {
                                   value: playButtonBorderColor,
                                   onChange: value => setAttributes( { playButtonBorderColor: value } ),
                                   label: __("Button Outer Border Color")
                               }
                           ]}
                       />
                       
                   </PanelBody>
               </InspectorControls>
                
                <a className={className + ' venobox'} >
                <div className={'sb-video-btn-wrapper'} style={ btnWrapperStyle }>
                    <div className={ 'sb-video-preview-img' } style={ previewImageStyle } />
                    <div className={ 'sb-video-wrapper'}>
                        {!previewImage &&
                        <MediaUpload
                            onSelect={(media) => setAttributes({previewImage: media.url, previewImageID: media.id})}
                            type="image"
                            value={previewImageID}
                            render={({open}) => (
                                <Button
                                    className={'button button-large'}
                                    onClick={open}
                                >
                                    {__('Select Preview Image')}
                                </Button>
                            )}
                        />
                        }
                        <div className={'sb-video-icon'} >
                            <span style={playButtonWrappperStyle} className={`dashicons dashicons-${playIcons}`}></span>
                        </div>
                        
                    </div>
                </div>

                <div className={'sb-video-input'}>
                    <Dashicon className={'sb-video-link-icon'} icon={'admin-links'}/>
                    <TextControl
                        placeholder={__('Youtube or Vimeo Video Url')}
                        value={videoUrl}
                        onChange={(value) => {
                            setAttributes({videoUrl: value});
                        }}
                    />

                    <IconButton
                        icon="editor-break"
                        label={__('Apply')}
                        type="submit"
                        className="sb-apply-iconbutton"
                    />

                </div>
                    
                </a>
            </Fragment>
            
        );
      
    }
}