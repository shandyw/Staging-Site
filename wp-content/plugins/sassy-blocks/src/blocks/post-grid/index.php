<?php
function sassy_blocks_render_post_grid( $attributes ){
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['postscount'],
		'post_status' => 'publish',
		'order'       => $attributes['order'],
		'orderby'     => $attributes['orderBy'],
		'category'    => isset($attributes['categories']) ? $attributes['categories'] : '',
	), 'OBJECT');

	if ( count( $recent_posts ) === 0 ) {
		return;
	}
	
	$markup = '';
	$markup .= '<div class="wp-block-sassy-blocks-post-grid post-grid-view sb-d-flex sb-row sb-flex-wrap">';
	foreach ( $recent_posts as $post ){
		$post_id = $post->ID;
		$post_thumbnail_id = get_post_thumbnail_id($post_id);
		
		$gridView = $attributes['postLayout'] === 'grid' ? 'post-item sb-mlr-15 sb-mb-40 column-'.$attributes['columns'].' '.$attributes['align'].'' : 'post-item sb-mlr-15 sb-mb-40 '.$attributes['align'].'';

		// start the post-item wrap
		$markup .= sprintf( '<article class="%1$s">', esc_attr($gridView) );
		
		if( isset($attributes['displayPostImage']) && $attributes['displayPostImage'] ) {
			$markup .= sprintf( '<div class="post-image"><a href="%1$s" target="_blank" rel="bookmark">%2$s</a></div>',
				esc_url( get_permalink( $post_id ) ),
				wp_get_attachment_image( $post_thumbnail_id, ''.$attributes['postImageSizes'].'')
			);
		}
		// start the post content wrap
		$markup .= '<div class="post-content-area">';
		
		// start the post meta wrap
		$markup .= '<div class="post-meta">';
		
		if( isset($attributes['displayPostAuthor']) && $attributes['displayPostAuthor'] ) {
			$markup .= sprintf(
				'<a target="_blank" href="%2$s">%1$s</a>',
				esc_html( get_the_author_meta( 'display_name', $post->post_author ) ),
				esc_url( get_author_posts_url( get_author_posts_url( $post->post_author ) ) )
			);
		}
		
		if( isset($attributes['displayPostDate']) && $attributes['displayPostDate'] ) {
			$markup .= sprintf(
				'<time datetime="%1$s">%2$s</time>',
				esc_attr( get_the_date( 'c', $post_id ) ),
				esc_html( get_the_date( '', $post_id ) )
			);
		}
		
		$markup .= '</div>';
		// close the post meta wrap
		
		// start the post title wrap
		$markup .= sprintf( '<h2 class="post-title"><a href="%1$s" target="_blank" rel="bookmark">%2$s</a></h2>', 
			esc_url( get_permalink($post_id) ), 
			esc_html( get_the_title($post_id)) );
		// close the post title wrap
		
		// start the post excerpt wrap
		$content = get_the_excerpt( $post_id );
		if( $content && $attributes['displayPostExcerpt'] ) {
			$markup .= sprintf( ' <div class="post-excerpt"><div><p>%1$s</p></div></div>',
				wp_kses_post( $content )
			);
		}
		// close the post excerpt wrap

		// start the post read more wrap
		if( isset($attributes['displayPostReadMoreButton']) && $attributes['displayPostReadMoreButton'] ) {
			$markup .= sprintf( '<div><a class="post-read-moore" href="%1$s" target="_blank" rel="bookmark">%2$s</a></div>', esc_url( get_permalink( $post_id ) ),esc_html( $attributes['postReadMoreButtonText'] ) );
		}
		// close the post read more wrap
		
		$markup .= '</div>';
		// close the post content wrap
		
		$markup .= '</article>';
		// close the post-item wrap
	}
	$markup .= '</div>';
	return $markup;

}

function sassy_blocks_register_post_grid(){
	
	if( !function_exists('register_block_type') ){
		return;
	}

	register_block_type( 'sassy-blocks/post-grid', array(
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'sb-text-left',
			),
			'categories' => array(
				'type' => 'string',
			),
			'postscount' => array(
				'type' => 'number',
				'default' => 5,
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type' => 'string',
				'default' => 'date',
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'postLayout' => array(
				'type' => 'string',
				'default' => 'grid',
			),
			'postImageSizes' => array(
				'type' => 'string',
				'default' => 'full',
			),
			'displayPostImage' => array(
				'type' => 'boolen',
				'default' => true
			),
			'displayPostDate' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostAuthor' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostExcerpt' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostReadMoreButton' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'postReadMoreButtonText' => array(
				'type' => 'string',
				'default' => 'Read More',
			),
		),
		'render_callback' => 'sassy_blocks_render_post_grid',
	));
	
	
}
add_action( 'init', 'sassy_blocks_register_post_grid' );


/**
 * Create API fields for additional info
 */

function sassy_blocks_register_rest_fields() {
	register_rest_field(
		'post',
		'sassy_blocks_featured_media_urls',
		array(
			'get_callback' => 'get_sassy_blocks_featured_media',
			'update_callback' => null,
			'schema' => array(
				'description' => __( 'Different Sized Featured Images', 'sassy-blocks'),
				'type' => 'array'
			)
		)
	);

}
add_action('rest_api_init', 'sassy_blocks_register_rest_fields');

function get_sassy_blocks_featured_media($object){
	$featured_media = wp_get_attachment_image_src( $object['featured_media'], 'full', false );

	return array(
		'thumbnail' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'thumbnail',
			false
		) : '',
		'sassy_blocks_landscape_large' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_landscape_large',
			false
		) : '',
		'sassy_blocks_portrait_large' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_portrait_large',
			false
		) : '',
		'sassy_blocks_square_large' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_square_large',
			false
		) : '',
		'sassy_blocks_landscape' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_landscape',
			false
		) : '',
		'sassy_blocks_portrait' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_portrait',
			false
		) : '',
		'sassy_blocks_square' => is_array($featured_media) ? wp_get_attachment_image_src(
			$object['featured_media'],
			'sassy_blocks_square',
			false
		) : '',
		'full' => is_array($featured_media) ? $featured_media : '',
	);

}
/**
 * Add image sizes
 */
function sassy_blocks_image_sizes() {
	add_image_size( 'sassy_blocks_landscape_large', 1200, 800, true );
	add_image_size( 'sassy_blocks_portrait_large', 1200, 1800, true );
	add_image_size( 'sassy_blocks_square_large', 1200, 1200, true );
	add_image_size( 'sassy_blocks_landscape', 600, 400, true );
	add_image_size( 'sassy_blocks_portrait', 600, 900, true );
	add_image_size( 'sassy_blocks_square', 600, 600, true );
}
add_action( 'after_setup_theme', 'sassy_blocks_image_sizes' );