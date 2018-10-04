/**
 * Internal dependencies
 */

import { normaliseFormats } from './normalise-formats';

/**
 * Combine all Rich Text values into one. This is similar to
 * `String.prototype.concat`.
 *
 * @param {...[object]} values An array of all values to combine.
 *
 * @return {Object} A new value combining all given records.
 */
export function concat( ...values ) {
	return normaliseFormats( values.reduce( ( accumlator, { _formats, _text } ) => ( {
		_text: accumlator._text + _text,
		_formats: accumlator._formats.concat( _formats ),
	} ) ) );
}
