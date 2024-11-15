
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { 
		isPrimary, 
		hasStyle, 
		hasBottom, 
		maxWidth,
		padding
	} = attributes;
	return (
		<div { ...useBlockProps.save() } >
			<div>

			{hasStyle && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-top separator`}></div>
			)}
			<section className='section-content'
				style={{ backgroundColor:  !hasStyle
					? '#ffffff'
					:  isPrimary
					? 'var(--wp--preset--color--green-pea)'
					: 'var(--wp--preset--color--pale-peach)',
					padding: `${padding.block} ${padding.inline}`,
				}}
			>
				<div 
					className='content-wrapper'
					style={{ maxWidth: maxWidth}}
				>
					<InnerBlocks.Content />
				</div>
			</section>
			{hasStyle && hasBottom && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-bottom separator`}></div>
			)}
			</div>

		</div>
	);
}
