module.exports = {
  setupFiles: [
    '<rootDir>/client/src/tests/setupTests.js',
  ]
};

// module.exports = {
//   verbose: true,
//   clearMocks: true,
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   moduleDirectories: [
//     "node_modules"
//   ],
//   moduleFileExtensions: ["js", "jsx"],
//   moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
//   "\\.(scss|sass|css)$": "identity-obj-proxy"},
//   setupFilesAfterEnv: ["./jest.config.js"],
//   testEnvironment: "enzyme-adapter-react-16",
//   testEnvironmentOptions: {
//     "enzymeAdapter": "react16",
//   },
//   transform: {
//     "^.+\\.js$": "babel-jest",
//     "^.+\\.jsx$": "babel-jest",
//   },
// };