module.exports = {
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.js'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    }, 
    moduleFileExtensions: [
        "scss",
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|scss|less)$": "<rootDir>/src/__mocks__/styleMock.js"
      }
  };