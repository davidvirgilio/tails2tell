
import { RichText, useBlockProps} from '@wordpress/block-editor';

export default function save({ attributes }) {

	const { title, image, includeButtons, buttons, isPrimary, x, y} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className='hero-wrapper'
				style={ isPrimary
					? {backgroundColor: 'var(--wp--preset--color--green-pea)'}
					: {backgroundColor: 'var(--wp--preset--color--pale-peach)'}
				}
			>

				<RichText.Content
					tagName='h1'
					value={title}
					style={isPrimary
						? { color: 'var(--wp--preset--color--pale-peach)'}
						: { color: 'var(--wp--preset--color--green-pea)'}
					}
				/>

				{
					<div className='frame-container'>
							<div className={`decorator top-left ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator top-right ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator bottom-left ${!isPrimary ? "secondary" : ""}`}></div>
							<div className={`decorator bottom-right ${!isPrimary ? "secondary" : ""}`}></div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322 280" className='frame'>
							<path d="M279.905 59.2729C243.86 13.231 195.228 2.48682 151.251 8.54844C107.678 14.5543 67.9308 37.1002 47.9727 58.856C37.9455 69.7864 27.028 86.8236 19.002 106.509C10.9725 126.202 5.62705 149.061 7.31009 171.585C9.00569 194.278 17.8536 216.58 38.011 234.51C58.0352 252.321 88.6199 265.287 132.864 270.702C221.372 281.535 277.088 252.859 300.933 207.649C324.527 162.913 315.399 104.611 279.905 59.2729Z"
								stroke={ isPrimary
									? 'var(--wp--preset--color--pale-peach)'
									: 'var(--wp--preset--color--orange-cat)'
								}
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
				}

				{ includeButtons && (
					<div className='buttons-container'>
						{
							buttons.map((button, index)=>{
								return (<button className='wp-element-button wp-block-button__link'>
									<RichText.Content
										key={index}
										tagName='a'
										value={button.label}
										href={button.url}
										className='hero-button'
									/>
									{ button.icon !== 'none' && ( <div className={button.icon}></div>) }
								</button>)
							})
						}
					</div>
				)}
			</div>
			<div className='hero-separator'>
			</div>
		</div>
	);
}
