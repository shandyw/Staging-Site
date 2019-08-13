<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package sassy-blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function sassy_blocks_loader_frontend_assets()
{
    wp_enqueue_style(
        'sassy_blocks_loader-style-css',
        plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
        array(),
        filemtime(plugin_dir_path(__DIR__).'dist/blocks.style.build.css')
    );

    wp_enqueue_style(
        'sassy_blocks_loader-icons-css',
        plugins_url('src/assets/css/sassy-blocks-icons.css', dirname(__FILE__)),
        array(),
        filemtime(plugin_dir_path(__DIR__).'src/assets/css/sassy-blocks-icons.css')
    );
}

// Hook: Frontend assets.
add_action('enqueue_block_assets', 'sassy_blocks_loader_frontend_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function sassy_blocks_loader_editor_assets()
{
    wp_enqueue_script(
        'sassy_blocks_loader-js',
        plugins_url('dist/blocks.build.js', dirname(__FILE__)),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' , 'wp-editor'),
        filemtime(plugin_dir_path(__DIR__).'dist/blocks.build.js')
    );

    wp_enqueue_style(
        'sassy_blocks_loader-editor-css',
        plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__DIR__).'dist/blocks.editor.build.css')
    );
}

// Hook: Editor assets.
add_action('enqueue_block_editor_assets', 'sassy_blocks_loader_editor_assets');

function sassy_blocks_loader_register_frontend_scripts()
{
    wp_enqueue_style(
        'sassy_blocks_loader-venobox-css',
        plugins_url('src/assets/css/venobox.min.css', dirname(__FILE__))
    );

    wp_enqueue_script(
        'sassy_blocks_loader-venobox-min-js',
        plugins_url('src/assets/js/venobox.min.js', dirname(__FILE__)),
        array('jquery'),
        '20181415',
        true
    );

    wp_enqueue_script(
        'sassy_blocks_loader-venobox-custom-js',
        plugins_url('src/blocks/video/venobox-custom.js', dirname(__FILE__)),
        array('jquery'),
        '20181415',
        true
    );

    wp_enqueue_style(
        'sb-fe-image-comparison-slider-twentytwenty-no-compass',
        plugins_url('src/blocks/block-image-comparison-slider/assets/css/twentytwenty-no-compass.css',
            dirname(__FILE__)),
        array(),
        ''
    );

    wp_enqueue_style(
        'sb-fe-image-comparison-slider-twentytwenty',
        plugins_url('src/blocks/block-image-comparison-slider/assets/css/twentytwenty.css', dirname(__FILE__)),
        array(),
        ''
    );

    wp_enqueue_script(
        'sb-fe-image-comparison-slider-twenty-twenty',
        plugins_url('src/blocks/block-image-comparison-slider/assets/js/jquery.twentytwenty.js', dirname(__FILE__)),
        array('jquery'),
        '',
        true
    );

    wp_enqueue_script(
        'sb-fe-image-comparison-slider-event-move',
        plugins_url('src/blocks/block-image-comparison-slider/assets/js/jquery.event.move.js', dirname(__FILE__)),
        array('jquery'),
        '',
        true
    );

    wp_enqueue_script(
        'sb-fe-image-comparison-slider-custom-script',
        plugins_url('src/blocks/block-image-comparison-slider/assets/js/main.js', dirname(__FILE__)),
        array('jquery'),
        '',
        true
    );

    wp_enqueue_style(
        'sassy_blocks_loader-slider-carousel-default-min-css',
        plugins_url('src/blocks/block-testimonial/components/slider/owl.theme.default.min.css', dirname(__FILE__))
    );

    wp_enqueue_style(
        'sassy_blocks_loader-slider-carousel-css',
        plugins_url('src/blocks/block-testimonial/components/slider/owl.carousel.min.css', dirname(__FILE__))
    );

    wp_enqueue_script(
        'sassy_blocks_loader-owl-carousel-js',
        plugins_url('src/blocks/block-testimonial/components/slider/owl.carousel.js', dirname(__FILE__)),
        array('jquery'),
        '547657',
        true
    );

    wp_enqueue_script(
        'sassy_blocks_loader-owl-custom-js',
        plugins_url('src/blocks/block-testimonial/components/custom-slider.js', dirname(__FILE__)),
        array('jquery'),
        '547657',
        true
    );
}

add_action('wp_enqueue_scripts', 'sassy_blocks_loader_register_frontend_scripts');


// register a sassy blocks custom category
add_filter('block_categories', function ($categories, $post) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'sassy-blocks',
                'title' => __('Sassy Blocks', 'sassy-blocks')
            ),
        )
    );

}, 10, 2);
