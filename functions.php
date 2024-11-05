<?php

function tails2tell_custom_blocks_init() {

	$block_files = glob( __DIR__ . '/blocks/*/build' );

	foreach($block_files as $block_file){
		register_block_type($block_file);
	};
}

add_action( 'init', 'tails2tell_custom_blocks_init');


if ( ! function_exists( 'tails2tell_pattern_categories' ) ) :
	
	function tails2tell_pattern_categories() {

		register_block_pattern_category(
			'tails2tell_page',
			array(
				'label'       => _x( 'Pages', 'Block pattern category', 'tails2tell' ),
				'description' => __( 'A collection of full page layouts.', 'tails2tell' ),
			)
		);
	}
endif;

add_action( 'init', 'tails2tell_pattern_categories' );

// Adding SVG support
function add_svg_support($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'add_svg_support');

if ( ! function_exists( 'tails2tell_block_styles' ) ) :
	function tails2tell_block_styles() {
		register_block_style(
			'core/template-parts',
			array(
				'name'         => 'header-position',
				'label'        => __( 'Header Position', 'tails2tell' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
					.wp-block-group{
						position: relative;
					}
				',
			)
		);
	}
endif;

add_action( 'init', 'tails2tell_block_styles' );


