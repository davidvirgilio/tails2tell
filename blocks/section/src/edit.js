
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Button, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {isPrimary, hasStyle} = attributes;
	return (
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title={__('Settings','section-block')}>
						<ToggleControl
							label={__('Coloured Section', 'section-block')}
							checked={hasStyle}
							onChange={()=>setAttributes({hasStyle: !hasStyle})}
						/>
					</PanelBody>
					{ hasStyle && (
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
					)}
				</Panel>
			</InspectorControls>
		<div { ...useBlockProps() } >
			{ hasStyle && (
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
				<InnerBlocks
					allowedBlocks={[
						'core/group',
					]}
					template={[
						['core/group'],
					]}
				/>
			</section>
			{hasStyle && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-bottom separator`}></div>
			)}
		</div>
		</>
	);
}
