const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    distDir: './.next',
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    env: {

    },
    webpack: function (config, { defaultLoaders }) {
        const resolvedBaseUrl = path.resolve(config.context, "../../Common/");
        console.log({ resolvedBaseUrl });
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