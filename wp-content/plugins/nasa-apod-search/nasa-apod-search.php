<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://www.shandyward.com
 * @since             1.0.0
 * @package           Nasa_Apod_Search
 *
 * @wordpress-plugin
 * Plugin Name:       NASA APOD Search
 * Plugin URI:        http://www.shandyward.com/projects/nasa-apod-plugin
 * Description:       Display NASA APOD content using a shortcode to insert in a page or post.
 * Version:           1.0.0
 * Author:            Shandy Ward
 * Author URI:        http://www.shandyward.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       nasa-apod-search
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'NASA_APOD_SEARCH_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-nasa-apod-search-activator.php
 */




function activate_nasa_apod_search() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-nasa-apod-search-activator.php';
	Nasa_Apod_Search_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-nasa-apod-search-deactivator.php
 */




function deactivate_nasa_apod_search() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-nasa-apod-search-deactivator.php';
	Nasa_Apod_Search_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_nasa_apod_search' );
register_deactivation_hook( __FILE__, 'deactivate_nasa_apod_search' );



/**
	 * Adds the manage link in the plugins list 
     *
     * @access global
     * @return string The manage link in the plugins list 
     */	
    function duplicator_manage_link($links, $file) 
	{
        static $this_plugin;
        if (!$this_plugin)
            $this_plugin = plugin_basename(__FILE__);

        if ($file == $this_plugin) {
            $settings_link = '<a href="admin.php?page=duplicator">' . esc_html__("Manage", 'duplicator') . '</a>';
            array_unshift($links, $settings_link);
        }
        return $links;
    }
/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-nasa-apod-search.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_nasa_apod_search() {

	$plugin = new Nasa_Apod_Search();
	$plugin->run();

}
run_nasa_apod_search();
