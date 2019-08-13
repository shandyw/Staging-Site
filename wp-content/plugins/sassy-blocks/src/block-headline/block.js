/**
 * BLOCK: sassy-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */


//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { 
    registerBlockType,  // Basic block register function
    RichText,           // Element Tag for all editable inputs
    source              // For attribute sources
} = wp.blocks; // Import registerBlockType() from wp.blocks
const { 
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
    InspectorControls } = wp.editor;
const { ColorPalette,  PanelBody,
    PanelRow } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'sassy-blocks/block-headline', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'block-headline - Sassy Blocks' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'block-headline — Sassy Blocks' ),
		__( 'Sassy Block Headline' )
	],
    
    /**
     * Object with all binding elements between the view HTML and the functions
     * Let's you bind data from DOM elements and storage attributes
     */
    attributes: {
        // To storage background colour of the div
        background_color: { 
            type: 'string', 
            default: 'red', // Default value for newly added block
        },           
        // To storage the complete style of the div that will be 'merged' with the selected colours
        block_style: { 
            selector: 'div', // From tag a
            source: 'attribute', // binds an attribute of the tag
            attribute: 'style', // binds style of a: the dynamic colours
        }
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

        var background_color = props.attributes.background_color // To bind button background colour

        // Style object for the button
        // I created a style in JSX sintax to keep it here for
        // the dynamic changes
        var block_style = props.attributes.block_style // To bind the style of the button
        block_style = {
            backgroundColor: background_color,
            color: '#000',
            padding: '14px 25px',
            fontSize: '16px', 
        }

        //
        // onChange event functions
        //
        function onChangeBgColor ( content ) {
            props.setAttributes({background_color: content})
        }

		// Creates a <p class='wp-block-sassy-blocks-block-gtm-audio-block'></p>.
		return [
			<InspectorControls>
			 <PanelBody title={ __( 'Headline Style', 'sassy-blocks' ) } >
			  <PanelRow>
				<label class="blocks-base-control__label">Background Color</label>
                <ColorPalette // Element Tag for Gutenberg standard colour selector
                    onChange={onChangeBgColor} // onChange event callback
                />
                 </PanelRow>
                </PanelBody>
			</InspectorControls>
			,
			<div className={ props.className } style={block_style}>
				<p>Edit your header text</p>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

        var block_style = {
            backgroundColor: props.attributes.background_color
        }
		return (
			<div style={block_style}>
				<p>— Hello from the frontend.</p>
			</div>
		);
	},
} );