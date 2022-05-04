const path = require('path');
const dotenv = require("dotenv")

module.exports = function (siteName) {
    const environmentFiles = ['./env/.env.' + siteName, './env/.env.common'];
    environmentFiles.forEach(pathToEnv => {
        const resolvedPath = pathToEnv;
        console.log({ resolvedPath })
        dotenv.config({ path: resolvedPath });
    });
};