module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack", "url-loader"]
        });

        config.module.rules.push({
            test: /\.(woff|woff2)$/,
            use: ["url-loader"]
        });

        return config;
    }
};
