module.exports = {
	testURL: 'http://localhost/',
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	modulePathIgnorePatterns: ['<rootDir>/client/'],
}
