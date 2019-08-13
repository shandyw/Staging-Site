<?php
/**
 * Plugin Name: Sassy Blocks
 * Plugin URI: https://wordpress.org/shandyw/sassy-blocks/
 * Description: A wide collection of beautiful, customizable page building blocks for the new Gutenberg editor in WordPress.
 * Author: SW
 * Author URI: http://shandyward.com
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: sassy-blocks
 * @package sassy-blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Initializer.
 */
if (!function_exists('sassy_blocks_loader')) {
    function sassy_blocks_loader()
    {
        require_once plugin_dir_path(__FILE__).'src/init.php';
        require_once plugin_dir_path(__FILE__).'src/blocks/post-grid/index.php';
        require_once plugin_dir_path(__FILE__).'src/blocks/social-share/index.php';
    }

    add_action('plugins_loaded', 'sassy_blocks_loader');
}
