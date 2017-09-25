const should = require('should'),
    fs = require('fs'),
    path = require('path'),
    plugin = require('../');


let jsTest = function (fixture, options, done) {
    "use strict";

    let expected = path.join(__dirname, 'fixtures', fixture + '.expected.css')
    let source = path.join(__dirname, 'fixtures', fixture + '.css')
    let destination = path.join(__dirname, 'fixtures', fixture + '.actual.css')

    let expectedOutput = fs.readFileSync(expected, 'utf8');

    plugin.convert(source, destination).then(function(file) {

        let result = fs.readFileSync(destination, 'utf8')
        result.should.eql(expectedOutput);
        done();
    }).catch(function(err) {
        console.log(err);
    })
}

describe('sass-to-css-variables', function () {

    it('converts $ variables to var(--xxx) variables', function (done) {
        jsTest('test', {}, done);
    });

});
