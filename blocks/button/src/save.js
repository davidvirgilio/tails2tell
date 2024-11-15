
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { buttonIcons as icons} from '../../utils/button-icons';

export default function save({ attributes}) {
	const { label, url, icon } = attributes;
	return (
		<a { ...useBlockProps.save() }
			href={url}
			className='t2t-button wp-element-button wp-block-button__link'
		>
			<RichText.Content
				tagName="span"
				value={label}
			/>
			{icon && icons[icon]}
		</a>
	);
}
