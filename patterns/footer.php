<?php
/**
 * Title: Footer
 * Slug: tails2tell/footer
 * Categories: footer
 * Block Types: core/template-part/footer
 * Description: A footer section for tailstotell.ca.
 */
?>

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">

    <!-- wp:tails2tell/separator {"separatorType":"footer"} -->
    <div class="wp-block-tails2tell-separator" style="width:100%">
        <div class="separator separator-footer primary"></div>
    </div>
    <!-- /wp:tails2tell/separator -->

    <!-- wp:columns {"verticalAlignment":"center","className":"rearrange-on-mobile","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"right":"var:preset|spacing|60","left":"var:preset|spacing|60","bottom":"7rem"},"blockGap":{"top":"var:preset|spacing|100"}}},"backgroundColor":"green-pea","textColor":"white"} -->
    <div class="wp-block-columns are-vertically-aligned-center rearrange-on-mobile has-white-color has-green-pea-background-color has-text-color has-background has-link-color" style="margin-top:0;margin-bottom:0;padding-right:var(--wp--preset--spacing--60);padding-bottom:7rem;padding-left:var(--wp--preset--spacing--60)">
        <!-- wp:column {"verticalAlignment":"center","width":""} -->
        <div class="wp-block-column is-vertically-aligned-center">
            <!-- wp:group {"metadata":{"name":"Contact Info"},"style":{"spacing":{"blockGap":"var:preset|spacing|50"}},"layout":{"type":"flex","orientation":"vertical"}} -->
            <div class="wp-block-group">
                
                <!-- wp:group {"style":{"layout":{"selfStretch":"fit","flexSize":null}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
                <div class="wp-block-group">
                    <!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"layout":{"selfStretch":"fit","flexSize":null}}} -->
                    <figure class="wp-block-image size-full">
                        <img src="<?php echo esc_url(get_theme_file_uri("assets/icons/icon-house.svg")); ?>" alt="Address"/>
                    </figure>
                    <!-- /wp:image -->

                    <!-- wp:paragraph -->
                    <p>1017B Hammond Avenue <br>Crossfield, Alberta, T0M 0S0</p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->

                <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
                <div class="wp-block-group">
                    <!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
                    <figure class="wp-block-image size-full">
                        <img src="<?php echo esc_url(get_theme_file_uri("assets/icons/icon-phone.svg")); ?>" alt="Phone"/>
                    </figure>
                    <!-- /wp:image -->

                    <!-- wp:paragraph -->
                    <p><a href="tel:4039460400" data-type="page" data-id="74">(403) 946 0400</a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->

                <!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
                <div class="wp-block-group">
                    <!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
                    <figure class="wp-block-image size-full">
                        <img src="<?php echo esc_url(get_theme_file_uri("assets/icons/icon-envelop.svg")); ?>" alt="Email"/>
                    </figure>
                    <!-- /wp:image -->

                    <!-- wp:paragraph -->
                    <p><a href="mailto:info@tailstotell.ca">info@tailstotell.ca</a></p>
                    <!-- /wp:paragraph -->
                </div>
                <!-- /wp:group -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center","width":"","style":{"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50"}}}} -->
        <div class="wp-block-column is-vertically-aligned-center" style="padding-top:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50)">
            <!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","className":"logo-footer"} -->
            <figure class="wp-block-image aligncenter size-full logo-footer">
                <a href="<?php  echo esc_url( home_url( '/' ) ); ?>">
                    <img src="<?php echo esc_url(get_theme_file_uri("assets/images/logo-stacked.svg")); ?>" alt="Tails to Tell"/>
                </a>
            </figure>
            <!-- /wp:image -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column {"verticalAlignment":"center","width":""} -->
        <div class="wp-block-column is-vertically-aligned-center">
            <!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
            <div class="wp-block-group">
                <!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|pale-peach"}}},"layout":{"selfStretch":"fit","flexSize":null}},"textColor":"pale-peach","fontSize":"normal","fontFamily":"gloria-hallelujah"} -->
                <p class="has-text-align-center has-pale-peach-color has-text-color has-link-color has-gloria-hallelujah-font-family has-normal-font-size">
                    Join Our Social Media Channels
                </p>
                <!-- /wp:paragraph -->

                <!-- wp:social-links {"iconColor":"white","iconColorValue":"#ffffff","openInNewTab":true,"size":"has-large-icon-size","className":"is-style-logos-only","layout":{"type":"flex","justifyContent":"center","flexWrap":"nowrap"}} -->
                <ul class="wp-block-social-links has-large-icon-size has-icon-color is-style-logos-only">
                    <!-- wp:social-link {"url":"https://www.facebook.com/tailstotell","service":"facebook"} /-->
                    <!-- wp:social-link {"url":"https://www.instagram.com/tailstotellcats","service":"instagram"} /-->
                    <!-- wp:social-link {"url":"https://www.instagram.com/tailstotellcats/","service":"x"} /-->
                </ul>
                <!-- /wp:social-links -->
            </div>
            <!-- /wp:group -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
</div>
<!-- /wp:group -->
