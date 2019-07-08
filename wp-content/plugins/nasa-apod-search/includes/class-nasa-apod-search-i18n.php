<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       http://www.shandyward.com
 * @since      1.0.0
 *
 * @package    Nasa_Apod_Search
 * @subpackage Nasa_Apod_Search/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Nasa_Apod_Search
 * @subpackage Nasa_Apod_Search/includes
 * @author     Shandy Ward <shandy@shandyward.com>
 */
class Nasa_Apod_Search_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'nasa-apod-search',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
