<?php

function sassy_blocks_register_socail_sharing(){
	if( !function_exists('register_block_type') ){
		return;
	}

	register_block_type('sassy-blocks/social-sharing', array(
		'attributes' => array(
			'facebook' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'twitter' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'google' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'linkedin' => array(
				'type'    => 'boolean',
				'default' => true,
			),
			'pinterest' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'reddit' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'email' => array(
				'type'    => 'boolean',
				'default' => false,
			),
			'shareButtonAlignment' => array(
				'type' => 'string',
				'default' => 'left',
			),
			'shareButtonStyle' => array(
				'type' => 'string',
				'default' => 'sb-sharing-icon-only',
			),
			'shareButtonShape' => array(
				'type' => 'string',
				'default' => 'sb-sharing-icon-circle',
			),
			'shareButtonSize' => array(
				'type' => 'string',
				'default' => 'sb-sharing-button-medium',
			),
			'shareButtonColorType' => array(
				'type' => 'string',
				'default' => 'sb-sharing-icon-color-social',
			),
		),
		'render_callback' => 'sassy_blocks_render_social_sharing',
	));
}
add_action('init', 'sassy_blocks_register_socail_sharing');



function sassy_blocks_render_social_sharing( $attr ){
	global $post;
	
	if( has_post_thumbnail() ){
		$thumbnail_id = get_post_thumbnail_id($post->ID);
		$thumbnail = $thumbnail_id ? current( wp_get_attachment_image_src( $thumbnail_id, 'full') ) : '';
	} else {
		$thumbnail = null;
	}
	
	$post_title = str_replace( ' ', '%20', get_the_title($post->ID) );
	
	// facebook url
	$facebook_url = 'https://www.facebook.com/sharer/sharer.php?u=' . get_the_permalink() . '&title=' . esc_attr($post_title) . '';
	
	// twitter url
	$twitter_url = 'http://twitter.com/share?text=' . esc_attr($post_title) . '&url='.get_the_permalink().'';
	
	// google url
	$google_url = 'https://plus.google.com/share?url=' . get_the_permalink() . '';
	
	// linkedin url 
	$linkedin_url = 'https://www.linkedin.com/shareArticle?mini=true&url=' . get_the_permalink() . '&title=' . esc_attr($post_title) . '';
	
	// pinterest url 
	$pinterest_url = 'https://pinterest.com/pin/create/button/?&url=' . get_the_permalink() . '&description=' . esc_attr($post_title) . '&media=' . esc_url( $thumbnail ) . '';
	
	// reddit url
	$reddit_url = 'https://www.reddit.com/submit?url=' . get_the_permalink() . '';
	
	// email url 
	$email_url = 'mailto:?subject=' .esc_attr($post_title)  . '&body=' .esc_attr($post_title)  . '&mdash;' . get_the_permalink() . '';
	
	$html = '';
	
	if( isset($attr['facebook']) && $attr['facebook'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-facebook"><i class="sb-icon-facebook"></i><span>%2$s</span></a></li>',
			esc_url( $facebook_url ),
			esc_html__( 'Share on Facebook', 'sassy-blocks' )
		);
	}
	
	if( isset($attr['twitter']) && $attr['twitter'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-twitter"><i class="sb-icon-twitter"></i><span>%2$s</span></a></li>',
			esc_url( $twitter_url ),
			esc_html__( 'Share on Twitter', 'sassy-blocks' )
		);
	}

	if( isset($attr['google']) && $attr['google'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-google"><i class="sb-icon-google"></i><span>%2$s</span></a></li>',
			esc_url( $google_url ),
			esc_html__( 'Share on Google', 'sassy-blocks' )
		);
	}

	if( isset($attr['linkedin']) && $attr['linkedin'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-linkedin"><i class="sb-icon-linkedin"></i><span>%2$s</span></a></li>',
			esc_url( $linkedin_url ),
			esc_html__( 'Share on Linkedin', 'sassy-blocks' )
		);
	}
	
	if( isset($attr['pinterest']) && $attr['pinterest'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-pinterest"><i class="sb-icon-pinterest"></i><span>%2$s</span></a></li>',
			esc_url( $pinterest_url ),
			esc_html__( 'Share on Pinterest', 'sassy-blocks' )
		);
	}

	if( isset($attr['reddit']) && $attr['reddit'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-reddit"><i class="sb-icon-reddit"></i><span>%2$s</span></a></li>',
			esc_url( $reddit_url ),
			esc_html__( 'Share on Reddit', 'sassy-blocks' )
		);
	}
	
	if( isset($attr['email']) && $attr['email'] ) {
		$html .= sprintf( '<li><a href="%1$s" target="_blank" class="sb-share-email"><i class="sb-icon-envelope"></i><span>%2$s</span></a></li>',
			esc_url( $email_url ),
			esc_html__( 'Share on Email', 'sassy-blocks' )
		);
	}
	
	
	$share_content = sprintf(
		'<div class="wp-block-sassy-blocks-social-sharing %2$s %3$s %4$s %5$s %6$s"><ul class="sb-social-sharing-links">%1$s</ul></div>',
		$html,
		$attr['shareButtonStyle'],
		$attr['shareButtonShape'],
		$attr['shareButtonColorType'],
		$attr['shareButtonSize'],
		$attr['shareButtonAlignment']
	);
	
	return $share_content;
	
	
}