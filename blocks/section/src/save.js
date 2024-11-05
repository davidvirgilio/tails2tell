
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { isPrimary, hasStyle} = attributes;
	return (
		<div { ...useBlockProps.save() } >
			{hasStyle && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-top separator`}></div>
			)}
			<section className='section-content'
				style={{ backgroundColor:  !hasStyle
					? '#ffffff'
					:  isPrimary
					? 'var(--wp--preset--color--green-pea)'
					: 'var(--wp--preset--color--pale-peach)'
				}}
			>
				<InnerBlocks.Content />
			</section>
			{hasStyle && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-bottom separator`}></div>
			)}

		</div>
	);
}
