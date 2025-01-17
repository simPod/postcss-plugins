import { NumberType, TokenType } from '@csstools/css-tokenizer';
import type { CSSToken } from '@csstools/css-tokenizer';

export const alwaysTrue: Array<CSSToken> = [
	[TokenType.Ident, 'max-color', 0, 0, { value: 'max-color' }],
	[TokenType.Colon, ':', 0, 0, undefined],
	[TokenType.Number, '2147477350', 0, 0, { value: 2147477350, type: NumberType.Integer }],
];

export const neverTrue: Array<CSSToken> = [
	[TokenType.Ident, 'color', 0, 0, { value: 'color' }],
	[TokenType.Colon, ':', 0, 0, undefined],
	[TokenType.Number, '2147477350', 0, 0, { value: 2147477350, type: NumberType.Integer }],
];
