
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, Button, PanelBody, ToggleControl, SelectControl, RangeControl} from '@wordpress/components'
import './editor.scss';
import { useEffect } from '@wordpress/element'

export default function Edit({attributes, setAttributes}) {
	const { illustrations, hasRandomIllustrations, numberOfItems } = attributes;

	const illustrationOptions = [
		{ label:'Bell', value: 'bell'},
		{ label:'Cat Face', value: 'cat-face'},
		{ label:'Can of Food', value: 'food-can'},
		{ label:'Cat Lying', value: 'lying'},
		{ label:'Cat Plate', value: 'plate'},
		{ label:'Cat Stretching', value: 'stretching'},
		{ label:'Feather Toy', value: 'toy-feather'},
		{ label:'Fish', value: 'fish'},
		{ label:'Teaser Toy', value: 'toy-feather-2'},
		{ label:'Paw', value: 'paw'},
		{ label:'Mice', value: 'mice'},
		{ label:'Yarn', value: 'yarn'}
	];
	const getRandomIllustrations = (quantity)=>{
		const numbersArray = [];
		while(numbersArray.length < quantity){
			const number = Math.round(Math.random()* 10);
			if(!numbersArray.includes(number)){
				numbersArray.push(number)
			}
		}
		const randomIllustrations = numbersArray.map((value)=>{
			return illustrationOptions[value].value;
		})
		setAttributes({illustrations: randomIllustrations})
	}
	
	useEffect(()=>{
		if(illustrations.length === 0){
			getRandomIllustrations(numberOfItems);
		}
	},[]);

	const setCustomIllustration = (illustration, index) => {
		const currentArray = [...illustrations];
		currentArray[index] = illustration;
		setAttributes({illustrations: currentArray});
	}

	const updateNumberOfItems = (numberOfIllustrations) =>{
		const newIllustrations = [...illustrations];
		if(numberOfIllustrations > illustrations.length){
			while(newIllustrations.length < numberOfIllustrations){
				const randomIndex = Math.round(Math.random()* 10);
				const newIllustration = illustrationOptions[randomIndex].value;
				if(!newIllustrations.includes(newIllustration)){
					newIllustrations.push(newIllustration);
				}
			}
		}else{
			newIllustrations.length = numberOfIllustrations;
		}
		setAttributes({
			numberOfItems: numberOfIllustrations,
			illustrations: newIllustrations,
		})
	}

	return (
		<>
		<InspectorControls>
			<Panel>
				<PanelBody title='Settings'>
					<RangeControl
						label={__('Number of Illustrations','decorative-banner-block')}
						value={numberOfItems}
						onChange={(value)=>updateNumberOfItems(value)}
						min={1}
						max={4}
					/>
					{/* <ToggleControl
						label={__('Random Illustrations','decorative-banner-block')}
						checked={hasRandomIllustrations}
						onChange={()=> setAttributes({hasRandomIllustrations: !hasRandomIllustrations})}
					/> */}
					
					{
					// !hasRandomIllustrations && (
						illustrations.map((illustration, index)=>{
							return <SelectControl
								key={index}
								label={__(`Illustration ${index + 1}`,'decorative-banner-block')}
								options={illustrationOptions}
								value={illustration}
								onChange={(value) => setCustomIllustration(value, index)}
								__nextHasNoMarginBottom
							/>
						})
					// )
					}
					{/* { hasRandomIllustrations && ( */}
					<Button
							variant='primary'
							description={__('Press to get new random illustrations.', 'decorative-banner-block')}
							onClick={()=>getRandomIllustrations(numberOfItems)}
						>
							Shuffle Illustrations
						</Button>
					{/* )} */}
				</PanelBody>
			</Panel>
		</InspectorControls>

		<div { ...useBlockProps() }>
			{illustrations.map((illustration, index)=>{
				return <div className={`illustration child-${index+1} ${illustration}`}></div>
			})}
		</div>
		</>
	);
}
