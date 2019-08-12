<?php

/**
 * Plugin Name: SW Blocks Basic Input
 * Plugin URI: https://github.com/shandyw/WordPress/ss-blocks
 * Description: This is a plugin with custom Gutenberg blocks.
 * Version: 1.0.0
 * Author: SW
 *
 * @package sw-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'sw_blocks_basic_input_load_textdomain' );

function sw_blocks_basic_input_load_textdomain() {
	load_plugin_textdomain( 'sw-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function sw_blocks_01_basic_input_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'sw-blocks-01-basic-input',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'sw-blocks-01-basic-input',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'sw-blocks/example-01-basic-input', array(
		'style' => 'sw-blocks-01-basic-input',
		'editor_script' => 'sw-blocks-01-basic-input',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'sw-blocks-01-basic-input', 'sw-blocks' );
  }

}
add_action( 'init', 'sw_blocks_01_basic_input_register_block' );
