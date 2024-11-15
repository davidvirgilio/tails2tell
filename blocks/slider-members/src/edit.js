
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {
	const { cards, setCardsQuantity} = attributes
	
	// Update card content
    const updateCardContent = (index, key, value) => {
        const newCards = [...cards];
        newCards[index][key] = value;
        setAttributes({ cards: newCards });
    };

	


	const blockProps = useBlockProps();
	let cardsArray = [];

	for (let i = 0; i < setCardsQuantity; i++) {
		if (!cards[i]) {
            cards.push({ title: '', content: '', imageUrl: '' });
        }
        cardsArray.push(
            <div className="card-wrapper swiper-slide" key={i}>
                <div className="heading-wrapper">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36" fill="none">
						<path d="M8.58422 9.68128C8.6008 7.28363 10.3004 4.43593 12.4809 4.41557C14.6856 4.39314 16.4058 7.27404 16.4838 9.68236C16.5653 12.1361 14.9749 15.0775 12.8411 15.2018C10.6158 15.3302 8.56615 12.347 8.58485 9.68422L8.58422 9.68128Z" fill="#EF4E23"/>
						<path d="M18.2151 10.0069C18.1687 7.2841 20.2611 4.35905 22.3995 4.41536C24.7392 4.47809 26.8168 8.11389 26.1873 11.088C25.7818 13.0021 24.1167 15.2886 22.04 15.2038C19.7802 15.1117 18.2559 12.2692 18.218 10.0062L18.2151 10.0069Z" fill="#EF4E23"/>
						<path d="M25.8925 15.203C26.7185 13.5442 28.8283 12.1633 30.5465 12.8197C32.4622 13.5511 33.0466 16.4888 32.1349 18.4828C31.3365 20.2281 29.199 21.6671 27.4818 21.0443C25.5411 20.3398 24.8695 17.2668 25.8961 15.2053L25.8925 15.203Z" fill="#EF4E23"/>
						<path d="M4.32662 12.8173C6.04837 12.2021 8.15122 13.5246 8.97843 15.2013C9.98899 17.2483 9.32783 20.2907 7.32078 21.0404C5.60172 21.6828 3.51896 20.4114 2.66956 18.8041C1.56217 16.7069 2.29333 13.5449 4.32956 12.8167L4.32662 12.8173Z" fill="#EF4E23"/>
						<path d="M8.72626 23.4521C9.02278 22.6321 11.1936 16.9485 16.7415 16.4832C21.1794 16.1092 24.5232 19.3466 25.8783 22.2035C26.9371 24.4341 27.7139 28.3926 25.6077 30.6159C25.4445 30.789 24.3732 31.8876 22.7444 32.0861C20.6901 32.3381 20.1905 30.8564 17.9019 30.7305C15.6506 30.6059 15.2894 31.9905 12.869 31.8526C12.4141 31.8262 10.2803 31.7043 8.99677 30.2262C7.07807 28.0183 8.408 24.3291 8.72564 23.4491L8.72626 23.4521Z" fill="#EF4E23"/>
					</svg>

                    <RichText
                        tagName="h3"
                        onChange={ (value)=> updateCardContent( i,'title', value ) }
                        value={ cards[i].title }
                        placeholder={ __( 'Name', 'card-slider' ) }
                    />
                </div>

				<MediaUploadCheck>
					<MediaUpload 
						onSelect={(media) => updateCardContent(i, 'imageUrl', media.url)}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open}>
								{cards[i].imageUrl ? (
									<img src={cards[i].imageUrl} alt={ __( 'Upload Image', 'card-slider' ) } />
								) : (
									<p className='has-gloria-hallelujah-font-family'>Click to Add an Image</p>
									// __( 'Upload Image', 'card-slider' )
								)}
							</Button>
						)}
					/>
				</MediaUploadCheck>
				

                <RichText
					tagName="p"
					onChange={(value) => updateCardContent(i, 'content', value)}
					value={cards[i].content}
					placeholder={ __( 'Tails to tell position', 'card-slider' ) }
                />
            </div>
        );
    }


	const onChangeQuantity = ( newQuantity ) => {
        setAttributes( { setCardsQuantity: newQuantity } );
        const newCards = [...cards];
        for (let i = newCards.length; i < newQuantity; i++) {
            newCards.push({ title: '', content: '', imageUrl: '' });
        }
        setAttributes({ cards: newCards.slice(0, newQuantity) });
    };

	return (
		<>
		<InspectorControls>
			<PanelBody title={ __( 'Settings', 'card-slider' ) }>
				<RangeControl
					label="Number of Cards"
					value={setCardsQuantity}
					onChange={onChangeQuantity}
					min={1}
					max={20}
				/>
						
			</PanelBody>
		</InspectorControls>
		
		<div {...blockProps}>
			<div className='card-container swiper'>

				<div className='card-content'>
					<div className='swiper-wrapper'>

						{ cardsArray }

					</div>
				</div>


			</div>
		</div>
		</>

	);
}
