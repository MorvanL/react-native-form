module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                extensions: ['.tsx', '.ts', '.js', '.json'],
                alias: {
                    '@mobeye/react-native-form-fields': '../src/index',
                },
            },
        ],
    ],
};
