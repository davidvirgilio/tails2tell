
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, Button} from '@wordpress/components' 
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {title, legend, categories} = attributes;

	return (
		<>
		<div { ...useBlockProps() }>
			<RichText
				tagName='span'
				value={legend}
				onChange={(legend)=>setAttributes({legend})}
				placeholder={__('Type a CTA legend','adoption-categories-block')}
			/>
			<RichText
				tagName='h2'
				value={title}
				onChange={(title)=>setAttributes({title})}
				placeholder={__('Add a title','adoption-categories-block')}
			/>
			<nav>
				{categories.map((category, index) => (
					<div className='frame-container'>
						<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 280" className='frame'>
							<path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z"
								stroke='var(--wp--preset--color--pale-peach)'
								strokeWidth='14'
							/>
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
						</svg>
					</div>
				))
				}
			</nav>
			<MediaUploadCheck>
				<MediaUpload
					allowedTypes={'image'}
					render={ ( { open } ) => (
						<>
						<img src=''/>
						<Button onClick={ open }>Open Media Library</Button>
						</>
					) }
				/>
			</MediaUploadCheck>
		</div>
		</>
	);
}
