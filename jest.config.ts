export default {
  roots: ["src"],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^(.*)\\.js$": "$1",
  },
  testEnvironment: "jest-environment-node",
  transformIgnorePatterns: [
    "node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)",
  ],
  transform: { "^.+\\.ts$": "ts-jest" },
};
