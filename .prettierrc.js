// @see "https://prettier.io/docs/en/configuration.html"

module.exports = {
    pluginSearchDirs: false,
    plugins: [
        require.resolve('prettier-plugin-organize-imports'),
        require.resolve('prettier-plugin-packagejson')
    ],
    printWidth: 200,
    proseWrap: 'never',
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.md',
            options: {
                proseWrap: 'preserve'
            }
        }
    ]
};
