
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { illustrations } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			{illustrations.map((illustration, index)=>{
				return <div className={`illustration child-${index+1} ${illustration}`}></div>
			})}
		</div>
	);
}
