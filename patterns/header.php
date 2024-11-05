<?php 

/**
 * Title: Header
 * Slug: tails2tell/header
 * Categories: header
 * Block Types: core/template-part/header
 */

?>

<!-- wp:group {"style":{"shadow":"var:preset|shadow|shadow","elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"padding":{"top":"0.625rem","bottom":"0.625rem","left":"3rem","right":"3rem"}}},"backgroundColor":"green-pea","textColor":"white","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group has-white-color has-green-pea-background-color has-text-color has-background has-link-color" style="padding-top:0.625rem;padding-right:3rem;padding-bottom:0.625rem;padding-left:3rem; box-shadow:var(--wp--preset--shadow--shadow)">
    <!-- wp:image {"width":"100px","sizeSlug":"full","linkDestination":"<?php echo esc_url( home_url()) ?>","metadata":{"name":"Tails to tell logo"}} -->
    <figure class="wp-block-image size-full is-resized">
        <a href="<?php echo esc_url( home_url()) ?>">
            <img src="<?php echo esc_url(get_theme_file_uri("assets/images/logo.svg")); ?>" alt="Tails to tell" style="width:100px"/>
        </a>
    </figure>
    <!-- /wp:image -->

    <!-- wp:navigation {"icon":"menu"} /-->
</div>
<!-- /wp:group -->