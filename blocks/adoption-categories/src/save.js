
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { title, legend, categories } = attributes
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
			<nav>
				{categories.map((category, index) => (
					<div>
						<a key={index} href={category.url}>{category.name}</a>
					</div>
				))
				}
			</nav>
		</div>
	);
}
