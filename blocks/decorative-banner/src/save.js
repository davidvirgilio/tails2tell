
import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { illustrations, size, isWhite } = attributes;
	return (
		<div { ...useBlockProps.save() } >
			<div className='decoration-wrapper'
				style={{ backgroundColor: isWhite && 'var(--wp--preset--color--green-pea)'}}
			>
				{illustrations.map((illustration, index)=>{
					return (
						<div 
							className={`illustration child-${index+1} ${illustration} ${isWhite && 'white'}`}
							style={{width: `${size}px`}}
						></div>
					)
				})}
			</div>
		</div>
	);
}
