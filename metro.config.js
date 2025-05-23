const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for React Native Web
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;
