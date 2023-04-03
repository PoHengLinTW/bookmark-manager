module.exports = {
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true },
		],
		'import/prefer-default-export': ['off'],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'import/no-dynamic-require': 'off',
		'global-require': 'off',
		'no-use-before-define': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-cycle': 'off',
		'react/prop-types': 'off',
		'react/jsx-filename-extension': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-param-reassign': 'off',
		radix: 'off',
		'import/order': 'off',
		'no-plusplus': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': 'off',
		'array-callback-return': 'warn',
		'react/jsx-no-bind': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off',
		'new-cap': 'off',
		'react/destructuring-assignment': 'off',
		'react/forbid-prop-types': 'off',
		'import/prefer-default-export': 'off',
		'react/no-unused-state': 'warn',
		'no-unused-vars': 'warn',
		'no-nested-ternary': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/sort-comp': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'no-return-assign': 'warn',
		'react/no-array-index-key': 'warn',
		'guard-for-in': 'warn',
		'no-restricted-syntax': 'warn',
		'max-classes-per-file': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/prefer-stateless-function': 'off',
		'react/no-did-update-set-state': 'warn',
		'react/jsx-closing-bracket-location': 'off',
		'react/function-component-definition': 'off',
		'react/jsx-one-expression-per-line': 'off',
		camelcase: 'off',
		'prefer-destructuring': 'warn',
		'no-await-in-loop': 'warn',
		'no-restricted-globals': 'off',
		'no-bitwise': 'off',
		eqeqeq: 'warn',
		'no-shadow': 'warn',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/button-has-type': 'off',
        'arrow-parens': 'error',
		'comma-dangle': 'off'
	},
};