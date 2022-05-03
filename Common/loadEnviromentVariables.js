const path = require('path');
const dotenv = require("dotenv")

module.exports = function (dirName) {
    const environmentFiles = ['../.env', '../../Common/.env.common'];
    environmentFiles.forEach(pathToEnv => {
        const resolvedPath = path.resolve(dirName, pathToEnv);
        console.log({ resolvedPath })
        dotenv.config({ path: resolvedPath });
    });
};