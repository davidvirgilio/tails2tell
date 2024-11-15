
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps() }>
			<div>
				<Swiper
					modules={[Pagination, Navigation]}
					pagination={{
					dynamicBullets: true,
					clickable: true
					}}
					navigation
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>

				</Swiper>
			</div>
		</div>
	);
}
