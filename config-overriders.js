const { override } = require('customize-cra');

module.exports = override(
    (config) => {
        const output = {
            publicPath: "./"
        }
        config.output = Object.assign(config.output, output)
        return config
    }
)