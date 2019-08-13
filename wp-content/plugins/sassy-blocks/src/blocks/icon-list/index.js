import edit from './components/edit';

const{ __ } = wp.i18n;
const{ registerBlockType } = wp.blocks;
const{ RichText, } = wp.editor;

import './style.scss';
import './editor.scss';

registerBlockType('sassy-blocks/icon-list', {
    title : __('SB Icon List'),
    icon : 'editor-ul',
    category : 'sassy-blocks',
    keywords : [
        __('list'),
        __('list item'),
        __('sassy-blocks'),
    ],
    attributes : {
        items : {
            type: 'array',
            source : 'children',
            selector: 'ul',
            default : []
        },
        columns : {
            type: 'number',
            default: 1
        },
        iconBoxHeight: {
            type: 'number',
            default: 50
        },
        iconBoxWidth: {
            type: 'number',
            default: 50
        },
        iconBoxBgColor: {
            type: 'string',
            default: '#fff',
        },
        iconBoxBorderColor: {
            type: 'string',
            default: '#ccc',
        },
        icon : {
            type: 'string',
            default: '\u005Cf344'
        },
        iconColor: {
            type: 'string',
            default: '#47b475',
        },
        itemGap: {
            type: 'number',
            default: 15
        },
        textIndent:{
            type: 'number',
            default: 70
        },
        textColor: {
            type: 'string',
            default: '#000',
        },
        textSize: {
            type: 'number',
            default: 16,
        },
        
    },
    edit,
    
    save(props){

        const{ attributes: { items, icon, iconColor, itemGap, textIndent, textColor, textSize, columns, iconBoxBgColor, iconBoxBorderColor, iconBoxHeight, iconBoxWidth}, attributes} = props;

        const itemStyle = {
            '--content' : `'${icon}'`,
            '--icon-color' : iconColor ? `${iconColor}` : undefined,
            '--text-color' : textColor ? `${textColor}` : undefined,
            '--text-size' : textSize ? `${textSize}px` : undefined,
            '--text-indent' : textIndent ? `${textIndent}px` : undefined,
            '--item-line-height' : itemGap ? `${itemGap}px` : undefined,
            '--columns': columns ? `${columns}` : undefined,
            '--icon-box-bg-color' : iconBoxBgColor ?  `${iconBoxBgColor}` : undefined,
            '--icon-box-border-color' : iconBoxBorderColor ?  `${iconBoxBorderColor}` : undefined,
            '--icon-box-height' : iconBoxHeight ?  `${iconBoxHeight}px` : undefined,
            '--icon-box-width' : iconBoxWidth ?  `${iconBoxWidth}px` : undefined,
        };
        
        return(
        <div className={`wp-block-sassy-blocks-icon-list`} style={itemStyle}>
            <RichText.Content
                tagName="ul"
                value={ items }
                className="list-item"
            />
        </div>
        );
        
    }
    
    
});



