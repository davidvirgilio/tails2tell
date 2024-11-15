
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Button, ToggleControl} from '@wordpress/components';
import { __experimentalUnitControl as UnitControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {
		isPrimary, 
		hasStyle, 
		hasBottom, 
		maxWidth,
		padding
	} = attributes;

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
							<UnitControl
								className='unit-control'
								label={__('Max Content Width','section-block')}
								onChange={ (maxWidth)=> setAttributes({maxWidth}) }
								value={ maxWidth }
							/>
							<UnitControl
								className='unit-control'
								label={__('Vertical Padding','section-block')}
								onChange={ (value)=> setAttributes({padding: { inline: padding.inline, block: value}}) }
								value={ padding.block }
							/>
							<UnitControl
								className='unit-control'
								label={__('Horizontal Padding ','section-block')}
								onChange={ (value)=> setAttributes({padding: { inline: value, block: padding.block}}) }
								value={ padding.inline }
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
							<PanelRow >
								<ToggleControl
									label={__('Bottom Separator', 'section-block')}
									checked={hasBottom}
									onChange={()=>setAttributes({hasBottom: !hasBottom})}
									className='hasBottomSetting'
								/>
							</PanelRow>
						</PanelBody>
					)}
				</Panel>
			</InspectorControls>
		<div { ...useBlockProps() } >
			<div>

			{ hasStyle && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-top separator`}></div>
			)}
			<section className='section-content'
				style={{ backgroundColor:  !hasStyle
					? '#ffffff'
					:  isPrimary
					? 'var(--wp--preset--color--green-pea)'
					: 'var(--wp--preset--color--pale-peach)',
					padding: `${padding.block} ${padding.inline}`,
				}}
			>
				<div 
					className='content-wrapper'
					style={{ maxWidth: maxWidth}}
				>
					<InnerBlocks
						allowedBlocks={[
							'core/group',
						]}
						template={[
							['core/group',{layout: {type: "constrained", contentSize:"900px"}}],
						]}

					/>
				</div>
			</section>
			{hasStyle && hasBottom && (
				<div className={`${isPrimary ? 'primary' : 'secondary'} separator-bottom separator`}></div>
			)}
			</div>
		</div>
		</>
	);
}
