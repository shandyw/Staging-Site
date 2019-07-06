<?php
/**
 * @package NasaApodSearch
 * @version 1.0
 */
/*
Plugin Name: Nasa APOD Search
Plugin URI: http://www.shandyward.com
Description: Display NASA APOD content using a shortcode to insert in a page or post
Version: 0.1
Text Domain: nasa-apod-search
Author: Shandy Ward
Author URI: http://www.shandyward.com
*/

/* ---------- license -----------*/


/* ---------- security statement -----------*/

if( !defined( 'ABSPATH' ) ) {
	die;
}

/* ---------- add hooks -----------*/

require_once plugin_dir_path( __FILE__ ) . 'inc/activate.php';
register_activation_hook( __FILE__, array('NasaApodSearchActivate','activate') );
require_once plugin_dir_path( __FILE__ ) . 'inc/deactivate.php';
register_deactivation_hook( __FILE__, array('NasaApodSearchDeactivate','deactivate') );


class NasaApodSearch {
	function register(){
		//for backend
		add_action( 'admin_enqueue_scripts', array($this,'backendEnqueue'));
		//for frontend
		add_action( 'wp_enqueue_scripts', array($this,'frontendEnqueue'));
		add_action('admin_menu',array($this,'add_admin_pages')); 

		add_action( 'plugin_action_links_' . plugin_basename( __FILE__ ), array($this,'plugin_links') );

		// If I needed Documentation/donate links in admin
		// add_filter( 'plugin_row_meta', array($this,'plugin_row_meta_links'), 10, 2 );

	}

	function add_admin_pages(){
	// this is a builtin method of WordPress:
	 add_menu_page('NasaApodSearch','NasaApodSearch','manage_options','nasaapodsearch_plugin',array($this,'admin_index'),'',110);
	}
	
	function admin_index(){
	//require template
	  require_once plugin_dir_path( __FILE__ ) . 'templates/adminindex.php';
	}

	
	function backendEnqueue(){
		wp_enqueue_style( 'NasaApodSearchStyle', plugins_url( '/assets/css/admin_mystyle.css', __FILE__ ));
		wp_enqueue_script( 'NasaApodSearchScript', plugins_url( '/assets/js/admin_myscript.js', __FILE__ ));
	}
	function frontendEnqueue(){
		wp_enqueue_style( 'NasaApodSearchStyle', plugins_url( '/assets/css/front_mystyle.css', __FILE__ ));
		wp_enqueue_script( 'NasaApodSearchScript', plugins_url( '/assets/js/front_myscript.js', __FILE__ ));
	}
	// Creates links in section 1 of plugin on plugins page (settings)
	function plugin_links( $links ) {
        $links = array_merge( array(
            '<a href="' . esc_url( admin_url( '/admin.php?page=nasaapodsearch_plugin' ) ) . '">' . __( 'Settings', 'textdomain' ) . ''
        ), $links );
        return $links;
    }

    // Creates links in section 2 of plugin on plugins page (Documentation/donate)

    // function plugin_row_meta_links( $links, $file ) {
    //     $base = plugin_basename( __FILE__ );
    //     if ($file == $base ) {
    //         $new_links = array(
    //                 'donate' => '<a href="donation_url" target="_blank">Donate</a>',
    //                                 'doc' => '<a href="doc_url" target="_blank">Documentation</a>'
    //                 );
    //     $links = array_merge( $links, $new_links );    }    return $links;}

}

if(class_exists('NasaApodSearch')){
	$nasaapodsearch=new NasaApodSearch();
	$nasaapodsearch->register();
}






function nasa_apod_search($atts) {

}

add_shortcode('nasa-apod-search', 'nasa_apod_search');