module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [ 'eslint:recommended', 'plugin:react/jsx-runtime', 'plugin:react/recommended' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [ 'react' ],
	rules: {
		indent: [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'windows' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'never' ],
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'object-curly-spacing': [ 'error', 'always' ],
		// 'space-in-brackets': [ 'error', 'never' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
	}
}
