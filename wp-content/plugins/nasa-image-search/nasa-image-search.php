<?php
/**
 * Plugin Name: Nasa Image Search
 * Plugin URI: https://www.tbare.com
 * Description: Display NASA search content using a shortcode to insert in a page or post
 * Version: 0.1
 * Text Domain: nasa-image-search
 * Author: Shandy Ward
 * Author URI: https://www.shandyward.com
 */



add_action( 'wp_enqueue_scripts', 'nasa_image_search_scripts');
function nasa_image_search_scripts() {

		wp_enqueue_script( 'react-js', plugins_url( 'react.min.js', __FILE__ ), array(), false, true );
		wp_enqueue_script( 'reactdom-js', plugins_url( 'react-dom.min.js', __FILE__ ), array(), false, true );

	
	
}

function nasa_image_search($atts) {

	/** @var array|WP_Error $response */
$response = wp_remote_get( 'https://api.nasa.gov/planetary/apod?api_key=HKsJUhoShamrsu7ZnW1BzQ4GEV5jC1hAYn2yZr7r' );
 
if ( is_array( $response ) && ! is_wp_error( $response ) ) {
    $headers = $response['headers']; // array of http header lines
    $body    = $response['body']; // use the content
    // $content = '<h2 class="demoClass">This is a plugin to demo a custom Wordpress plugin that utilized NASA\'s API.</h2>';

}



	
	 
   
     return  $body;
}

add_shortcode('nasa-image-search', 'nasa_image_search');