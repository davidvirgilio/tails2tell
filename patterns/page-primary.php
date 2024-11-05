<?php
/**
 * Title: Main Page Template
 * Slug: tails2tell/page-primary
 * Categories: tails2tell_page
 * Keywords: starter
 * Block Types: core/post-content
 * Post Types: page, wp_template
 * Viewport width: 1100
 * Description: Main template for primary pages with two buttons for donations and events.
 */
?>

<!-- wp:tails2tell/hero {"title":"<?php echo get_the_title(); ?>","image":null,"numberOfButtons":2,"buttons":[{"label":"Donate","url":"#donate","icon":"dollar"},{"label":"Events","url":"#events","icon":"paw"}]} -->
    <div class="wp-block-tails2tell-hero">
        <div class="hero-wrapper" style="background-color:var(--wp--preset--color--green-pea)">
            <h1 style="color:var(--wp--preset--color--pale-peach)"><?php echo get_the_title(); ?></h1>
        <div class="frame-container">
            <div class="decorator top-left "></div>
            <div class="decorator top-right "></div>
            <div class="decorator bottom-left "></div>
            <div class="decorator bottom-right "></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 280" class="frame">
                <path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z" 
                    stroke="var(--wp--preset--color--pale-peach)" 
                    stroke-width="14"
                ></path>
                <defs>
                    <clipPath id="clip">
                        <path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z"></path>
                    </clipPath>
                </defs>
                <foreignObject width="100%" height="100%" style="clip-path:url(#clip)">
                    <div style="width:100%;height:100%;background-image:url();background-size:cover;background-position:50% 50%" class="no-image-set"></div>
                </foreignObject>
            </svg>
        </div>
        <div class="buttons-container">
            <button class="wp-element-button wp-block-button__link">
                <a href="#donate" class="hero-button">Donate</a>
                <div class="dollar"></div>
            </button>
            <button class="wp-element-button wp-block-button__link">
                <a href="#events" class="hero-button">Events</a>
                <div class="paw"></div>
            </button></div>
        </div>
        <div class="hero-separator"></div>
    </div>
<!-- /wp:tails2tell/hero -->
