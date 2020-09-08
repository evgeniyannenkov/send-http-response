const path = require('path');
const fs = require('fs');

const fsPromises = fs.promises;

function getPackages(dir) {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(({ name }) => name)
        .sort();
}

async function writeVersionsToBundle() {
    return fsPromises.writeFile(
        path.join(process.cwd(), 'dist', 'versions.json'),
        JSON.stringify(
            {
                success: true,
                data: {
                    versions: getPackages(path.resolve(process.cwd(), 'dist'))
                }
            },
            null,
            2
        )
    );
}

module.exports = function() {
    return {
        name: 'generate-file',
        async writeBundle() {
            return writeVersionsToBundle();
        }
    };
};
