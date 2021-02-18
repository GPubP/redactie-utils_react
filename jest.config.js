module.exports = {
	setupFilesAfterEnv: ['<rootDir>/scripts/jest-setup.ts'],
	// Module file extensions for importing
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
	},
};
