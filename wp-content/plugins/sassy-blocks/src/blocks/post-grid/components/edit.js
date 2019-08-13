import moment from 'moment';

const { Component } = wp.element;
const { InspectorControls, BlockControls, AlignmentToolbar } = wp.editor;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
const { QueryControls, PanelBody, Spinner,Placeholder, RangeControl, Toolbar, ToggleControl, SelectControl, TextControl } = wp.components;
const { decodeEntities } = wp.htmlEntities;


class PostGridEdit extends Component{

    constructor(props) {
        super( ...arguments );
    }

    
    render(){
        const { attributes, categoriesList, setAttributes, latestPosts, className, media, authors} = this.props;
        const {categories, order, orderBy, postscount, columns, postLayout, displayPostImage, displayPostDate, displayPostAuthor, displayPostExcerpt, displayPostReadMoreButton, postReadMoreButtonText, align, postImageSizes } = attributes;
        const hasPosts = Array.isArray(latestPosts) && latestPosts.length;
        const mediaItems = Array.isArray(media) && media.length;
        
        if( !hasPosts || !mediaItems){
            return(
                <Fragment>
                    <Placeholder
                        icon="admin-post"
                        label={ __( 'No Posts Available' ) }
                    >
                        {
                            !Array.isArray(latestPosts) || !Array.isArray(mediaItems) ? <Spinner /> : __( 'No posts found.' )
                        }
                    </Placeholder>
                </Fragment>
            );
        }
        
        const displayPosts = latestPosts.length > postscount ? latestPosts.slice(0, postscount) : latestPosts;

        const postImageDefaultSizes = [
            { value: 'full', label: __( 'Full' ) },
            { value: 'sassy_blocks_landscape_large', label: __( 'Landscape Large' ) },
            { value: 'sassy_blocks_portrait_large', label: __( 'Portrait Large' ) },
            { value: 'sassy_blocks_square_large', label: __( 'Square Large' ) },
            { value: 'sassy_blocks_landscape', label: __( 'Landscape Small' ) },
            { value: 'sassy_blocks_portrait', label: __( 'Portrait Small' ) },
            { value: 'sassy_blocks_square', label: __( 'Square Small' ) },
            { value: 'thumbnail', label: __( 'Thumbnail' ) },
        ];

        const getPostAuthorName = ( author_id ) => {
            for(let author in authors){
                if( authors[author].id === author_id ){
                    return authors[author].name;
                }
            }
        };

        const getPostAuthorUrl = ( author_id ) => {
            for(let author in authors){
                if( authors[author].id === author_id ){
                    return authors[author].link;
                }
            }
        };

        
        const layoutControls = [
            {
                icon: 'grid-view',
                title: __( 'Grid View' ),
                onClick: () => setAttributes( { postLayout: 'grid' } ),
                isActive: postLayout === 'grid',
            },
            {
                icon: 'list-view',
                title: __( 'List View' ),
                onClick: () => setAttributes( { postLayout: 'list' } ),
                isActive: postLayout === 'list',
            },
        ];
        
        const gridView = postLayout === 'grid' ? `column-${columns}` : ``;
        
        return (
            <Fragment>
                <BlockControls>
                     <AlignmentToolbar
                         value={align}
                         onChange={(nextAlign) => {
                             setAttributes({align: nextAlign});
                         }}
                     />
                    <Toolbar controls={ layoutControls } />
                </BlockControls>
                <InspectorControls key="inspector">
                    <PanelBody title={ __( 'Latest Posts Settings' ) }>
                        <QueryControls
                            { ...{ order, orderBy }}
                            numberOfItems={postscount}
                            categoriesList={ categoriesList }
                            selectedCategoryId = {categories}
                            onOrderChange = { ( value ) => setAttributes({ order: value })}
                            onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
                            onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined  }) }
                            onNumberOfItemsChange={ (value) => setAttributes({ postscount: value }) }
                        />
                        
                        { postLayout === 'grid' &&
                            <RangeControl
                                label={__('Columns')}
                                value={columns}
                                onChange={(value) => setAttributes({columns: value})}
                                min={1}
                                max={6}
                            />
                        }
                        <ToggleControl
                            label = { __('Display Featured Image') }
                            checked = { !!displayPostImage }
                            onChange = { (value) => setAttributes( { displayPostImage: value } ) }
                        />
                        { displayPostImage &&
                        <SelectControl
                            label={__('Image Size')}
                            options={postImageDefaultSizes}
                            value={postImageSizes}
                            onChange={(newValue) => {setAttributes({ postImageSizes: newValue})
                        }}
                        />
                        }
                        <ToggleControl
                            label = { __('Display Post Author') }
                            checked = { !!displayPostAuthor }
                            onChange = { (value) => setAttributes( { displayPostAuthor: value } ) }
                        />
                        <ToggleControl
                            label = { __('Display Post Date') }
                            checked = { !!displayPostDate }
                            onChange = { (value) => setAttributes( { displayPostDate: value } ) }
                        />
                        <ToggleControl
                            label = { __('Display Post Excerpt') }
                            checked = { !!displayPostExcerpt }
                            onChange = { (value) => setAttributes( { displayPostExcerpt: value } ) }
                        />
                        <ToggleControl
                            label = { __('Display Post Read More Button') }
                            checked = { !!displayPostReadMoreButton }
                            onChange = { (value) => setAttributes( { displayPostReadMoreButton: value } ) }
                        />
                        { displayPostReadMoreButton &&
                            <TextControl
                                label={__('Read More Button Text')}
                                type="text"
                                value={postReadMoreButtonText}
                                onChange={(value) => setAttributes({postReadMoreButtonText: value})}
                            />
                        }
                    </PanelBody>
                </InspectorControls>

                <div className={`${ className } post-grid-view sb-d-flex sb-row sb-flex-wrap`}>
                    {
                        displayPosts.map( ( post, i ) =>
                            
                            <article className={`post-item sb-mlr-15 sb-mb-40 ${gridView} ${align}`}>
                                
                                {
                                    post.sassy_blocks_featured_media_urls[postImageSizes][0] && displayPostImage ? (
                                        <div className="post-image">
                                            <a href={ post.link } target="_blank" rel="bookmark">
                                                <img src={ post.sassy_blocks_featured_media_urls[postImageSizes][0] }/>
                                            </a>
                                        </div>
                                    ) : ( null )

                                }
                                
                                <div className="post-content-area">

                                    <div className="post-meta">
                                        {
                                            displayPostAuthor && getPostAuthorUrl(post.author) && getPostAuthorName(post.author) &&
                                            <a target="_blank"
                                               href={getPostAuthorUrl(post.author)}>{getPostAuthorName(post.author)}</a>
                                        }

                                        { displayPostDate && post.date_gmt &&
                                        <time dateTime={ moment( post.date_gmt ).utc().format()}>
                                            { moment( post.date_gmt ).local().format('MMMM DD, Y') }
                                        </time>
                                        }

                                    </div>

                                    { post.title &&
                                    <h2 className="post-title">
                                        <a href={post.link} target="_blank" rel="bookmark">
                                            {
                                                decodeEntities(post.title.rendered.trim()) || __('Untitled')
                                            }
                                        </a>
                                    </h2>
                                    }
                            
                                    { displayPostExcerpt && post.excerpt &&
                                    <div className="post-excerpt">
                                        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered.trim() }}/>
                                    </div>
                                    }
                                    
                                    { displayPostReadMoreButton && post.link &&
                                        <a className="post-read-moore" href={ post.link } target="_blank" rel="bookmark">{ postReadMoreButtonText }</a>
                                    }
                                </div>

                            </article>
                        )

                    }

                </div>
            </Fragment>
        );

    }
}

export default withSelect( ( select, props ) => {
    const { categories, order, orderBy, postscount} = props.attributes;
    const { getEntityRecords, getAuthors, getMediaItems } = select( 'core' );

    const latestPostsQuery = {
        categories,
        order,
        orderby: orderBy,
        per_page: postscount,
    };

    const query = { per_page: 100 };
    
    return {
        latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
        categoriesList: getEntityRecords( 'taxonomy', 'category', query ),
        media: getMediaItems(),
        authors: getAuthors(),
    };
} )( PostGridEdit );