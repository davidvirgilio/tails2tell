
import { RichText, useBlockProps } from '@wordpress/block-editor';
import placeHolderImage from '../../../assets/images/illustrations/illustration-stretching.svg';
import { frames } from '../../utils/frames';

export default function save({attributes}) {
	const {
		label, 
		img, 
		hasButton, 
		hasCaption, 
		link, 
		position, 
		thickness, 
		width,
		hasCustomCaption,
		customCaption,
		frameColor,
		frameId
	} = attributes;

	const frame = frames[frameId];





	return (
		<div { ...useBlockProps.save() }>
			<figure className='frame-wrapper'>
			<div 
				className='frame-container'
				style={{
					width: `${width}px`,
				}}
			>
				<svg 
					xmlns="http://www.w3.org/2000/svg"

					viewBox={`0 0 ${frame.width} ${frame.height}`}
					className='frame'
				>
					
					<defs>
						<clipPath id={`path-${frameId}`}>
							<path d={frame.path}/>
						</clipPath>
					</defs>
					<foreignObject width="100%" height="100%" style={{ clipPath: `url(#path-${frameId})` }}>
						<img
							style={{
								objectPosition: `${position.x}% ${position.y}%`,
							}}
							src={img ? img.url : placeHolderImage}
							alt={img ? img.alt : 'Image with no alt provided'}
							className={!img ? 'no-image-set' : ''}

						/>
					</foreignObject>
					<path d={frame.path}
						stroke={frameColor}
						strokeWidth={thickness * 0.14}
						strokeLinejoin={"bevel"}
						fill='transparent'
					/>
				</svg>
				
			</div>
			{ hasButton && (
				<RichText.Content
					tagName="a"
					href={link}
					value={label}
					className='frame-button wp-element-button wp-block-button__link'
				/>
			)}
			{hasCaption && img && (
				<figcaption>
					<RichText.Content
						tagName="p"
						value={ hasCustomCaption ? customCaption : img.caption}
					/>
				</figcaption>
			)}
			</figure>
		</div>
	);
}
