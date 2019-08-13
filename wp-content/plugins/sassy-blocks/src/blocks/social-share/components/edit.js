const {Component, Fragment} = wp.element;
const { __ } = wp.i18n;
const { InspectorControls, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, SelectControl, ToggleControl,} = wp.components;

export default class SocialSharingEdit extends Component{
    constructor( props ){
        super( ...arguments );
    }
    
    
    render(){
        
        const{ attributes:{facebook, twitter, google, linkedin, pinterest, reddit, email, shareButtonStyle, shareButtonShape, shareButtonColorType, shareButtonSize, shareButtonAlignment }, attributes, className, setAttributes} = this.props;
        const buttonStyleOptions = [
            { value: 'sb-sharing-icon-text', label: __( 'Icon and Text' ) },
            { value: 'sb-sharing-icon-only', label: __( 'Icon Only' ) },
            { value: 'sb-sharing-text-only', label: __( 'Text Only' ) },
        ];

        const buttonShapeOptions = [
            { value: 'sb-sharing-icon-square', label: __( 'Square' ) },
            { value: 'sb-sharing-icon-rounded-square', label: __( 'Rounded Square' ) },
            { value: 'sb-sharing-icon-circle', label: __( 'Circle' ) },
        ];
        
        const buttonColorTypeOptions = [
            { value: 'sb-sharing-icon-color-standard', label: __( 'Standard' ) },
            { value: 'sb-sharing-icon-color-social', label: __( 'Social Colors' ) },
        ];

        const shareButtonSizeOptions = [
            { value: 'sb-sharing-button-small', label: __( 'Small' ) },
            { value: 'sb-sharing-button-medium', label: __( 'Medium' ) },
            { value: 'sb-sharing-button-large', label: __( 'Large' ) },
        ];

        return(
            <Fragment>
            <BlockControls>
                <AlignmentToolbar
                    value={shareButtonAlignment}
                    onChange={(nextAlign) => {
                        setAttributes({shareButtonAlignment: nextAlign});
                    }}
                />
            </BlockControls>
            <InspectorControls>
                <PanelBody>
                    <p>{ __( 'Enable or Disable the sharing links you want to output.' ) }</p>
                    <ToggleControl
                        label={ __( 'Facebook' ) }
                        checked={ !! facebook }
                        onChange={ (value) => setAttributes( { facebook: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Twitter' ) }
                        checked={ !! twitter }
                        onChange={ (value) => setAttributes( { twitter: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Google' ) }
                        checked={ !! google }
                        onChange={ (value) => setAttributes( { google: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Linkedin' ) }
                        checked={ !! linkedin }
                        onChange={ (value) => setAttributes( { linkedin: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Pinterest' ) }
                        checked={ !! pinterest }
                        onChange={ (value) => setAttributes( { pinterest: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Reddit' ) }
                        checked={ !! reddit }
                        onChange={ (value) => setAttributes( { reddit: value } ) }
                    />
                    <ToggleControl
                        label={ __( 'Email' ) }
                        checked={ !! email }
                        onChange={ (value) => setAttributes( { email: value } ) }
                    />
                </PanelBody>
                <PanelBody title={__('Social Sharing Settings')}>
                    <SelectControl
                        label={ __( 'Button Style' ) }
                        value={shareButtonStyle}
                        options={buttonStyleOptions}
                        onChange={ (value) => setAttributes({ shareButtonStyle: value })}
                    />
                    <SelectControl
                        label={ __( 'Button Shape' ) }
                        value={shareButtonShape}
                        options={buttonShapeOptions}
                        onChange={ (value) => setAttributes({ shareButtonShape: value })}
                    />
                    <SelectControl
                        label={ __( 'Button Size' ) }
                        value={shareButtonSize}
                        options={shareButtonSizeOptions}
                        onChange={ (value) => setAttributes({ shareButtonSize: value })}
                    />
                    <SelectControl
                        label={ __( 'Button Color' ) }
                        value={shareButtonColorType}
                        options={buttonColorTypeOptions}
                        onChange={ (value) => setAttributes({ shareButtonColorType: value })}
                    />
                </PanelBody>
            </InspectorControls>
            
            <div className={className + ' ' + shareButtonStyle + ' ' + shareButtonShape + ' ' + shareButtonColorType + ' ' + shareButtonSize + ' '+ shareButtonAlignment}>
                <ul className='sb-social-sharing-links'>
                    
                    {!!facebook &&
                        <li>
                            <a className='sb-share-facebook'>
                                <i className="sb-icon-facebook"></i>
                                <span>
                                    {__('Share on Facebook')}
                                </span>
                            </a>
                        </li>
                    }
                    
                    {!!twitter &&
                    <li>
                        <a className='sb-share-twitter'>
                            <i className="sb-icon-twitter"></i>
                            <span>
                                {__('Share on Twitter')}
                            </span>
                        </a>
                    </li>
                    }

                    {!!google &&
                    <li>
                        <a className='sb-share-google'>
                            <i className="sb-icon-google"></i>
                            <span>
                                {__('Share on Google')}
                            </span>
                        </a>
                    </li>
                    }

                    {!!linkedin &&
                    <li>
                        <a className='sb-share-linkedin'>
                            <i className="sb-icon-linkedin"></i>
                            <span>
                                {__('Share on Linkedin')}
                            </span>
                        </a>
                    </li>
                    }

                    {!!pinterest &&
                    <li>
                        <a className='sb-share-pinterest'>
                            <i className="sb-icon-pinterest"></i>
                            <span>
                                {__('Share on Pinterest')}
                            </span>
                        </a>
                    </li>
                    }

                    {!!reddit &&
                    <li>
                        <a className='sb-share-reddit'>
                            <i className="sb-icon-reddit"></i>
                            <span>
                                {__('Share on Reddit')}
                            </span>
                        </a>
                    </li>
                    }

                    {!!email &&
                    <li>
                        <a className='sb-share-email'>
                            <i className="sb-icon-envelope"></i>
                            <span>
                                {__('Share via Email')}
                            </span>
                        </a>
                    </li>
                    }
                    
                </ul>
                
            </div>
            </Fragment>
        );
    }
}

