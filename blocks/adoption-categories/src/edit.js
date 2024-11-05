
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, Button} from '@wordpress/components' 
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {title, legend} = attributes;
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
