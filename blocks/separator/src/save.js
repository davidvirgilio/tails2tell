
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { separatorType, isPrimary } = attributes;
	return (
		<div {...useBlockProps.save()} style={{width:'100%'}}>
			<div
				className={`separator separator-${separatorType} ${isPrimary ? 'primary' : 'secondary'}`}
			>

			</div>
		</div>
	);
}
