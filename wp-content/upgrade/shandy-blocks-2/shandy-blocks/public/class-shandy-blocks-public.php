<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://github.com/shandyw/wordpress/shandy-blocks
 * @since      1.0.0
 *
 * @package    shandy_blocks
 * @subpackage shandy_blocks/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    shandy_blocks
 * @subpackage shandy_blocks/public
 * @author     Shandy Ward <shandy@shandyward.com>
 */
class shandy_blocks_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $shandy_blocks    The ID of this plugin.
	 */
	private $shandy_blocks;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $shandy_blocks       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $shandy_blocks, $version ) {

		$this->shandy_blocks = $shandy_blocks;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in shandy_blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The shandy_blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->shandy_blocks, plugin_dir_url( __FILE__ ) . 'css/shandy_blocks-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in shandy_blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The shandy_blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->shandy_blocks, plugin_dir_url( __FILE__ ) . 'js/shandy_blocks-public.js', array( 'jquery' ), $this->version, false );

	}

}
