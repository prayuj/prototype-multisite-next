const path = require('path');
require('../../Common/loadEnviromentVariables')(__dirname);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    distDir: './.next',
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    env: {
        ENVIROMENT_VARIABLE_COMMON: process.env.ENVIROMENT_VARIABLE_COMMON,
        ENVIROMENT_VARIABLE_SITE_A: process.env.ENVIROMENT_VARIABLE_SITE_A,
        ENVIROMENT_VARIABLE_OVERRIDE_BY_SITE: process.env.ENVIROMENT_VARIABLE_OVERRIDE_BY_SITE,
    },
    webpack: function (config, { defaultLoaders }) {
        const resolvedBaseUrl = path.resolve(config.context, "../../Common/");
        config.module.rules = [
            ...config.module.rules,
            {
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                include: [resolvedBaseUrl],
                use: defaultLoaders.babel,
                exclude: (excludePath) => {
                    return /node_modules/.test(excludePath);
                },
            },
        ];
        return config;
    },
});