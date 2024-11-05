/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';


const separatorIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" width="26" height="7" viewBox="0 0 26 7" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20933 2.01036C4.43105 2.10881 2.87518 2.90682 1.72911 4.12769L0.270935 2.75885C1.74098 1.19286 3.76805 0.142455 6.09877 0.0134157C8.4341 -0.115879 10.9846 0.683777 13.5029 2.65597C17.8343 6.04823 22.0875 5.03913 24.2777 2.75168L25.7223 4.13486C22.7941 7.19312 17.379 8.23195 12.2697 4.23056C10.0676 2.50593 7.983 1.91216 6.20933 2.01036Z" fill="black"/>
	</svg>
)
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: separatorIcon,

	/**
	 * @see ./save.js
	 */
	save,
} );
