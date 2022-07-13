module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		jest: true
	},
	extends: ['eslint:recommended', 'plugin:react/jsx-runtime', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'comma-spacing': ['error', {'before': false, 'after': true}],
		'object-curly-spacing': ['error', 'never'],
		'space-after-keywords': 'off',
		'keyword-spacing': [2, {'before': true, 'after': true}],
		'computed-property-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'no-multiple-empty-lines': ['error', {max: 1}],
		'space-before-blocks': ['error', 'never'],
		'space-before-function-paren': ['error', 'always'],
		'block-spacing': ['error', 'never'],
		'arrow-spacing': 'error',
		'template-curly-spacing': 'error',
		'key-spacing': ['error', {
			'beforeColon': false,
			'afterColon': true,
			'mode': 'strict'
		}]
	}
}
