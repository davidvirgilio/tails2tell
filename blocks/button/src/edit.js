
import { __ } from '@wordpress/i18n';
import { useBlockProps, URLInput, URLInputButton, BlockControls, RichText, URLPopover, InspectorControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Toolbar, ToolbarItem, DropdownMenu, ToggleControl, Panel, PanelBody, BaseControl, SelectControl } from '@wordpress/components';
import { useState, useRef} from '@wordpress/element';
import { link } from '@wordpress/icons'
import { buttonIcons } from '../../utils/variables';
import './editor.scss';
import { buttonIcons as icons} from '../../utils/button-icons';


export default function Edit({attributes, setAttributes}) {
	const { label, url, opensInNewWindow, icon } = attributes;
	const [isVisible, setVisible] = useState(false);
	const buttonRef = useRef();

	const inputLink = <URLInput
		__nextHasNoMarginBottom
		value={url}
		onChange={(url)=>{
			setAttributes({url})
		}}
		className='url-input'
		placeholder={__('Search or type URL')}
	/>

	return (
		<>
		<InspectorControls>
			<Panel>
				<PanelBody title='Settings'>
					<BaseControl
						label={__('Link')}
					>
						{ inputLink }
					</BaseControl>
					<SelectControl
						options={buttonIcons}
						label={__('Icon')}
						value={icon}
						onChange={(icon)=>{
							console.log(icons.dollar)
							setAttributes({icon})
						}}
					/>
				</PanelBody>
			</Panel>
		</InspectorControls>
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					ref={buttonRef}
					icon={link}
					isPressed={!!url}
					onClick={() => {
						if(!isVisible) setVisible(true)
						}}
				/>
			</ToolbarGroup>
		</BlockControls>
		{isVisible && (
			<URLPopover
				anchor={buttonRef.current}
				offset={60}
				placement="bottom"
				onClose={()=>setVisible(false)}
				renderSettings={()=>(
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						checked={ opensInNewWindow }
						onChange={ (opensInNewWindow)=>setAttributes({opensInNewWindow}) }
					/>
				)}
			>
				{inputLink}
			</URLPopover>


		)}
		
		<div
			{ ...useBlockProps() }
			>
			<div
				className='t2t-button wp-element-button wp-block-button__link'
			>
				<RichText
					tagName="span"
					value={ label }
					href={ url }
					onChange={ ( label ) => {
						setAttributes({label})
					} }
					allowedFormats={['core/italic']}
					placeholder='label'
				/>
				{icon && icons[icon]}
			</div>
		</div>
		</>
	);
}
