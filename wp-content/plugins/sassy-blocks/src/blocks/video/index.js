// import all dependencies components
import edit from './components/videoedit';

const {__} = wp.i18n;
const { registerBlockType } = wp.blocks;

import './style.scss';
import './editor.scss';

registerBlockType( 'sassy-blocks/video', {
    title : __('SB Video'),
    icon: 'video-alt2',
    category: 'sassy-blocks',
    keywords: [
        __('video'),
        __('embed'),
        __('sassy-blocks'),
    ],
    attributes: {
        videoUrl : {
            type: 'string'
        },
        videoID : {
            type: 'string'
        },
        videoWidth : {
            type : 'number',
        },
        videoHeight : {
            type : 'number',
            default : 500,
        },
        isOverlayOpacity: {
            type: 'boolean',
            default: true
        },
        overlayColor : {
            type: 'string',
            default: '#f6f6f6',
        },
        overlayColorOpacity : {
            type : 'number',
            default: 0.5
        },
        previewImage : {
            type: 'string'
        },
        previewImageID : {
            type: 'number'
        },
        playIcons : {
            type: 'string',
            default: 'controls-play',
        },
        playButtonSize : {
            type : 'number',
        },
        playButtonColor : {
            type: 'string',
            default: '#191a1b',
        },
        playButtonBgColor : {
            type: 'string',
            default: '#ffffff',
        },
        playButtonWidth : {
            type : 'number',
            default: 100,
        },
        playButtonHeight : {
            type : 'number',
            default : 100,
        },
        playButtonLineHeight : {
            type : 'number',
            default : 100,
        },
        playButtonBorderColor : {
            type: 'string',
            default: '#ffffff',
        },
    },
    edit,
    save( props ){
        const { attributes:{ previewImage, videoUrl, videoHeight, overlayColor, videoWidth, playButtonSize, playButtonColor, playIcons,isOverlayOpacity, overlayColorOpacity, playButtonHeight, playButtonWidth, playButtonLineHeight, playButtonBgColor, playButtonBorderColor}, attributes} = props;
        
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
        
        return(
            <a className={'wp-block-sassy-blocks-video venobox'}  href={ !!videoUrl ? videoUrl : '#' } data-autoplay="true" data-vbtype="video">
                
                <div className={'sb-video-btn-wrapper'} style={ btnWrapperStyle }>
                    <div className={ 'sb-video-preview-img' } style={ previewImageStyle } />
                    <div className={ 'sb-video-wrapper'}>
                        <div className={'sb-video-icon'} >
                            <span style={playButtonWrappperStyle} className={`dashicons dashicons-${playIcons}`}></span>
                        </div>
                    </div>
                </div>
            </a>
        );
        
    }
    
});