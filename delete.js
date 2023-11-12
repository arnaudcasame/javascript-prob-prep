const fs = require('fs');

const pathTo = './javascript';

fs.readdir(pathTo, (err, files) => {
    files.forEach(file => {
        if(fs.lstatSync(pathTo + '/' + file).isDirectory()){
            fs.readdir(pathTo + '/' + file, (error, innerFiles)=> {
                innerFiles.forEach(innerFile => {
                    const innerPath = pathTo + '/' + file + '/' + innerFile;
                    const isFile = fs.lstatSync(innerPath).isDirectory();
                    if(isFile && (!innerFile.includes('.js') || innerFile.includes('.meta') || innerFile.includes('.config.js') || innerFile.includes('package.json') )){
                        if(fs.lstatSync(innerPath).isDirectory() && innerPath.includes('.meta')){
                            fs.readdir(innerPath, (errors, innerFiless)=> {
                                innerFiless.forEach(innerFolder => {
                                    const folder = innerPath + '/' + innerFolder
                                    console.log(folder, fs.lstatSync(folder).isFile());
                                    fs.unlinkSync(folder);
                                })
                                console.log('Delete Folder!!!', innerPath);
                                fs.rmdirSync(innerPath);
                            })
                        }
                    }
                })
            });
        }
    });
});