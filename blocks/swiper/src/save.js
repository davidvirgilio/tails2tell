import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save() }>
			{/* Slider main container */}
			<div class="swiper">
			{/* Additional required wrapper */}
			<div class="swiper-wrapper">
				{/* <!-- Slides --> */}
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
				<div class="swiper-slide">Slide 4</div>
				<div class="swiper-slide">Slide 5</div>
			</div>
			{/* If we need navigation buttons */}
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			{/* If we need pagination */}
			<div class="swiper-pagination"></div>

			</div>
		</div>
	);
}
