
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { title, legend } = attributes
	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content
				tagName='span'
				value={legend}
			/>
			<RichText.Content
				tagName='h2'
				value={title}
			/>
		</div>
	);
}
