import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { 
	Button, 
	Panel, 
	PanelBody, 
	ToggleControl, 
	RangeControl, 
	PanelRow,
	TextControl,
	SelectControl,
} from '@wordpress/components'
import { useSelect } from '@wordpress/data';
import { useEffect } from 'react';



const green = 'var(--wp--preset--color--green-pea)'
const peach = 'var(--wp--preset--color--pale-peach)'
const sunshade = 'var(--wp--preset--color--sunshade)'
const orange = 'var(--wp--preset--color--orange-cat)';

export default function Edit({attributes, setAttributes}) {
	const { 
		title, 
		image, 
		hasCustomTitle,
		hasCustomImage,
		isPrimary,
		includeButtons,
		numberOfButtons,
		buttons,
		x,
		y,
		thickness
	} = attributes;

	//Getting the post tittle using useSelect hook.
	const postTitle = useSelect((select)=>{
		if(!hasCustomTitle){
			return select('core/editor').getEditedPostAttribute('title');
			// return select('core/editor').getCurrentPost().title;
		}
	},[hasCustomTitle]);

	//Getting the post feature image ID using useSelect hook.
	const featuredImageId = useSelect((select)=>{
		if(!hasCustomImage){
			return select('core/editor').getEditedPostAttribute('featured_media');
		}
	},[hasCustomImage])

	//Getting the post feature image file using useSelect hook.
	const featuredImage = useSelect((select)=>{
		if(!hasCustomImage){
			return featuredImageId ? select('core').getMedia(featuredImageId) : null;
		}
	}, [featuredImageId]);
	
	useEffect(()=>{
		if(featuredImage && featuredImage !== image){
			setAttributes({image: { source_url: featuredImage.source_url, alt_text: featuredImage.alt_text}});
		}else if (!featuredImage && !hasCustomImage){
			setAttributes({image:null})
		}
		if(!title || !hasCustomTitle){
			setAttributes({title: postTitle});
		}
	}, [featuredImage, postTitle]);

	const updateNumberOfButtons = (newCount)=>{
		const newButtons = [...buttons]
		if(newCount > buttons.length){
			for( let i = buttons.length; i < newCount; i++ ){
				newButtons.push({
					label: `Button ${i + 1}`,
					url: "",
					icon: "none"
				});
			};
		}else{
			newButtons.length = newCount;
		}
		setAttributes({ numberOfButtons: newCount, buttons: newButtons});
	}

	const updateButton = (attribute, index, value)=>{
		const newButtons = [...buttons];
		switch (attribute){
			case 'url': newButtons[index].url = value;
			break
			case 'label': newButtons[index].label = value;
			break
			case 'icon': newButtons[index].icon = value;
			break
		}
		console.log(attribute, value);
		setAttributes({buttons: newButtons})

	}

	const onIncludeButtons = ()=> setAttributes({includeButtons: !includeButtons});

	const toggleCustomTitle = ()=>{
		setAttributes({
			hasCustomTitle: !hasCustomTitle,
			title: postTitle
		});
	};
	const toggleCustomImage = ()=>{
		setAttributes({
			hasCustomImage: !hasCustomImage,
			image: featuredImage
		});
	};

	const onStyleChange = ()=>{
		setAttributes({isPrimary: !isPrimary});
	};

	const buttonIconOptions = [
		{label: "None", value: "none"},
		{label: "Paw", value: "paw"},
		{label: "Dollar Sign", value: "dollar"},
	]

	return (
		<>
		<InspectorControls>
			<Panel>
				<PanelBody
					title={__('Settings', 'hero-banner-block')}
				> 
					<ToggleControl
						checked = {includeButtons}
						label={__( 'Include CTA buttons', 'hero-banner-block' )}
						onChange={onIncludeButtons}
					/>
					<ToggleControl
						checked={hasCustomTitle}
						label={__( 'Custom Title', 'hero-banner-block' )}
						onChange={toggleCustomTitle}
						help={
							hasCustomTitle
							? __('Insert the custom title on the template. Unchecked to reset the post title.', 'hero-banner-block')
							: __('The hero banner will render the post/page title, unless custom title is checked.', 'hero-banner-block')
						}
					/>
					<ToggleControl
						checked={hasCustomImage}
						label={__( 'Custom Image', 'hero-banner-block' )}
						onChange={toggleCustomImage}
						help={
							hasCustomImage
							? __('Set a custom image. Otherwise, the banner will render a predefined illustration if there is not a featured image.', 'hero-banner-block')
							: __('Check to add a custom image.', 'hero-banner-block')
						}
					/>
					{
						hasCustomImage && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) => setAttributes({image: {source_url: media.url}})}
									allowedTypes={ ['image'] }
									value={ image }
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
						)
					}
					
				</PanelBody>
				{
					includeButtons && (
						<PanelBody title='Buttons' initialOpen={false}>
							<RangeControl
								label={__("Number of Buttons", "hero-banner-block")}
								value={numberOfButtons}
								onChange={updateNumberOfButtons}
								min={1}
								max={4}
							/>
							{
								buttons.map((button, index)=>{
									return (
										<>
										<TextControl
											key={index}
											label={`Link for button ${index + 1}`}
											value={button.url}
											onChange={(value)=>updateButton('url',index, value)}
										/>
										<SelectControl
											key={index}
											value={button.icon}
											label={`Icon for button ${index + 1}`}
											options={buttonIconOptions}
											onChange={(value)=>updateButton('icon', index, value)}
										/>
										</>
									)
								})
							}
						</PanelBody>
					)
				}
				<PanelBody title='Image Adjustment' initialOpen={false}>
					<RangeControl
						label={__("Horizontal","hero-banner-block")}
						value={x}
						onChange={(x) => setAttributes({x})}
						min={0}
						max={100}
						allowReset
						resetFallbackValue={50}
					/>
					<RangeControl
						label={__("Vertical","hero-banner-block")}
						value={y}
						onChange={(y) => setAttributes({y})}
						min={0}
						max={100}
						allowReset
						resetFallbackValue={50}
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

				</PanelBody>
				<PanelBody 
					title={__('Style','hero-banner-block')}
					initialOpen={false}
				>
					<PanelRow>
						<Button
							variant='secondary'
							isPressed={isPrimary}
							className='block-style-btn'
							__next40pxDefaultSize
							onClick={onStyleChange}
						>
							Primary
						</Button>
						<Button
							variant='secondary'
							isPressed={!isPrimary}
							className='block-style-btn'
							__next40pxDefaultSize
							onClick={onStyleChange}
						>
							Secondary
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>

			<div { ...useBlockProps() }>
				<div
					className='hero-wrapper'
					style={ isPrimary
						? {backgroundColor: green}
						: {backgroundColor: peach}
					}
				>
					{
						hasCustomTitle && (
							<RichText
								tagName='h1'
								value={title}
								onChange={(title)=> setAttributes({title})}
								style={isPrimary
									? { color: peach}
									: { color: green}
								}
								placeholder='Add a Custom Title'
							/>
						)
					}{
						!hasCustomTitle && (
							<h1
								style={isPrimary
									? { color: peach}
									: { color: green}
								}
							>
								{ title ? title : 'Add a title'}
							</h1>
						)
					}
					{
						<div className='frame-container'>
							<div className={`decorator top-left ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator top-right ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator bottom-left ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator bottom-right ${!isPrimary ? "secondary" : ""}`}></div>
							<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 280" className='frame'>
								
								<defs>
									<clipPath id='clip'>
										<path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z"/>
									</clipPath>
								</defs>
								<foreignObject width="100%" height="100%" style={{ clipPath: 'url(#clip)' }}>
								<div style={{
										width: '100%',
										height: '100%',
										backgroundImage: `url(${image ? image.source_url : ''})`,
										backgroundSize: 'cover', // Ensures the image covers the entire div
										backgroundPosition: `${x}% ${y}%`, // Centers the image
									}}
									className={!image ? 'no-image-set' : ''}
								/>
								</foreignObject>
								<path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z"
									stroke={ isPrimary
										? peach
										: orange
									}
									strokeWidth={thickness * 0.14}
									fill='none'
								/>
							</svg>

						</div>
					}
					{
						includeButtons && (
							<div className='buttons-container'>
								{

									buttons.map((button, index)=>{
										return <button className='wp-element-button wp-block-button__link'>
											<>
											<RichText
												key={index}
												tagName='a'
												className='hero-button'
												href={button.url}
												value={button.label}
												onChange={(value)=> updateButton('label', index, value)}
												placeholder={__("Label", "hero-banner-block")}
											/>
											{ button.icon !== 'none' && ( <div className={button.icon}></div>) }
											</>
										</button>
									})
								}
							</div>
						)
					}
				</div>
				<div className={`hero-separator ${!isPrimary ? 'secondary' : '' }`}>
				</div>
			</div>
		</>
	);
}