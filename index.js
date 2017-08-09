const Q          = require('q');
const path       = require('path');
const fs         = require('fs');
const lineReader = require("readline");

module.exports = {

    convert: function(src, dest) {
        let deferred = Q.defer();

        let sourceCssStream = lineReader.createInterface({
            input: fs.createReadStream(src)
        })

        let rebuiltFile = '';

        sourceCssStream.on('line', function(line) {
            let currentLineWords = line.split(' ');
            let rebuiltLine = '';

            currentLineWords.forEach(function(value, index) {

                if(value.startsWith('$')) {
                    value = 'var(--' + value.replace('$', '') + ')';
                    if(value.includes(';')) {
                        value = value.replace(';', '');
                        value = value + ';';
                    }
                }

                if(index > 0) {
                    return rebuiltLine += ' ' + value;
                }
                return rebuiltLine += value;

            });

            rebuiltLine = rebuiltLine.replace('    ', '\t') + '\n';
            rebuiltFile += rebuiltLine;

        });

        sourceCssStream.on('close', function(line) {
            if(dest) {
                let outputFile = fs.createWriteStream(dest);

                outputFile.once('open', function(fd) {
                    outputFile.write(rebuiltFile);
                    outputFile.end();
                });
                outputFile.on('close', function() {
                    deferred.resolve(dest);
                });
            }
        });

        return deferred.promise;
    }

}