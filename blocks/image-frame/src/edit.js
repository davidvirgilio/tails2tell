
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUploadCheck, MediaUpload, RichText } from '@wordpress/block-editor';
import { Panel, PanelBody, RangeControl, ToggleControl, Button, TextControl, ColorPalette, SelectControl} from '@wordpress/components';
import placeHolderImage from '../../../assets/images/illustrations/illustration-stretching.svg';
import { palette } from '../../utils/variables';
import { frames } from '../../utils/frames';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {
		label, 
		img, 
		hasButton, 
		link, 
		position, 
		thickness, 
		width, 
		hasCaption, 
		hasCustomCaption,
		customCaption,
		frameColor,
		frameId
	} = attributes;

	const frame = frames[frameId];

	return (
		<>
		<InspectorControls>
			<Panel>
				<PanelBody title={__('Settings', 'image-frame-block')} initialOpen>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes({img: {url: media.url, alt: media.alt, caption: media.caption}})
								console.log(img)
							}}
							allowedTypes={ ['image'] }
							value={ img }
							render={ ( { open } ) => (
								<Button
									onClick={ open }
									variant='secondary'
									style={{marginBottom: '1.5rem'}}
								>
										Set image
								</Button>
							) }
						/>
					</MediaUploadCheck>
					<ToggleControl
						label={__('Include button', 'image-frame-block')}
						checked={hasButton}
						onChange={() => {
							if(hasButton) setAttributes({link: '/', label:'label'})
							if(hasCaption) setAttributes({hasCaption: false})
							setAttributes({hasButton: !hasButton})}
						}
					/>
					{hasButton && (
						<TextControl
							label={__('Button Link', 'image-frame-block')}
							value={link}
							placeholder={__('Add a link for the button.','image-frame-block')}
							onChange={(link) => setAttributes({link})}
						/>
					)}

				</PanelBody>
				<PanelBody title={__('Image Position','image-frame-block')} initialOpen={false}>
					
					<RangeControl
						allowReset={true}
						label={__('Horizontal Position', 'image-frame-block')}
						value={position.y}
						resetFallbackValue={50}
						min={0}
						max={100}
						onChange={(value)=> setAttributes({position: {x: position.x, y: value}})}
					/>
					<RangeControl
						allowReset={true}
						label={__('Vertical Position', 'image-frame-block')}
						value={position.x}
						resetFallbackValue={50}
						min={0}
						max={100}
						onChange={(value)=> setAttributes({position: {x: value, y: position.y}})}
					/>
					
				</PanelBody>
				<PanelBody title={__('Frame Adjustments','image-frame-block')} initialOpen={false}>
					<SelectControl
						options={frames}
						label={__('Frame', 'image-frame-block')}
						value={frameId}
						onChange={(value) => {
							setAttributes({frameId: Number(value)})
						}
						}
					/>
						<RangeControl
							allowReset={true}
							label={__('Width', 'image-frame-block')}
							value={width}
							resetFallbackValue={275}
							min={100}
							max={1000}
							help={__('Set a fixed width.','image-frame-block')}
							onChange={(width)=> {
								setAttributes({width})
							}}
						/>

					<RangeControl
						allowReset={true}
						label={__('Frame Thickness', 'image-frame-block')}
						value={thickness}
						resetFallbackValue={100}
						min={0}
						max={100}
						help={__('Modifies the frame stroke width.','image-frame-block')}
						onChange={(thickness)=> setAttributes({thickness})}
					/>
					<ColorPalette
						colors={palette}
						value={frameColor}
						onChange={(frameColor) => setAttributes({frameColor})}
						disableCustomColors
						clearable={false}

					/>
				</PanelBody>
				{!hasButton && (
				<PanelBody title={__('Caption','image-frame-block')}>
					<ToggleControl
						label={__('Include Caption', 'image-frame-block')}
						checked={hasCaption}
						onChange={() => setAttributes({hasCaption: !hasCaption})}
					/>
					<ToggleControl
						label={__('Custom Caption', 'image-frame-block')}
						checked={hasCustomCaption}
						onChange={() => {
							if(hasCustomCaption) setAttributes({customCaption: ""})
							setAttributes({hasCustomCaption: !hasCustomCaption})
						}}
					/>
				</PanelBody>
				)}
			</Panel>
		</InspectorControls>
		
		<div { ...useBlockProps() }>
			<figure className='frame-wrapper'>
				<div 
					className='frame-container'
					style={{
						width: `${width}px`,
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox={`0 0 ${(frame.width)} ${frame.height}`}
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
							strokeLinejoin="bevel"
							fill='transparent'
						/>
					</svg>

				</div>
				{ hasButton && (
					<RichText
						tagName="a"
						href={link}
						value={label}
						placeholder={__('Label','image-frame-block')}
						onChange={(value) => setAttributes({ label: value })}
						className="frame-button wp-element-button wp-block-button__link"
					/>
				)}
				{hasCaption && img && (
					<figcaption>
						{ hasCustomCaption
							? <RichText
								tagName='p'
								value={customCaption}
								onChange={(customCaption) =>
									setAttributes({ customCaption })
								}
								placeholder={__('Add new caption','image-frame-block')}
							/>
							: <p>{img.caption}</p>
						}
					</figcaption>
				)}

			</figure>
		</div>
		</>
	);
}
