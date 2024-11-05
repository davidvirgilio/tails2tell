import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	SelectControl
} from '@wordpress/components'
import './editor.scss';


export default function Edit({attributes, setAttributes}) {
	const { separatorType, isPrimary } = attributes;
	const separatorOptions = [
		{label: "Section Top", value: "top", },
		{label: "Section Bottom", value: "bottom", },
		{label: "Footer", value: "footer", },
	];

	return (
		<>
		<InspectorControls>
			<Panel>
				<PanelBody title={__('Setting', 'separator-block')}>
					<SelectControl
						label={__('Separator type:','separator-block')}
						help={__('Select the purpose of the separator.','separator-block')}
						options={separatorOptions}
						value={separatorType}
						onChange={(value)=>setAttributes({separatorType: value})}
					/>
				</PanelBody>
				<PanelBody title='Style'>
				<PanelRow>
						<Button
							variant='secondary'
							isPressed={isPrimary}
							className='block-style-btn'
							__next40pxDefaultSize
							onClick={()=>{setAttributes({isPrimary: !isPrimary})}}
						>
							Primary
						</Button>
						<Button
							variant='secondary'
							isPressed={!isPrimary}
							className='block-style-btn'
							__next40pxDefaultSize
							onClick={()=>{setAttributes({isPrimary: !isPrimary})}}
						>
							Secondary
						</Button>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>
		<div { ...useBlockProps() } style={{width:'100%'}}>
			<div
				className={`separator separator-${separatorType} ${isPrimary ? 'primary' : 'secondary'}`}
			>
			</div>
		</div>
		</>
	);
}
