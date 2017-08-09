# SASS/SCSS to CSS Variables

This plugin converts 'old' SASS/SCSS style $variable to the new var(---variableName) standard. It will read your specified file and either overwrite it or output to a new file (not currently supported when using globbing).

## Installation
With [npm](https://www.npmjs.com) do:
```
npm install sass-to-css-variables
```

With [yarn](https://yarnpkg.com/en/) do:
```
yarn add sass-to-css-variables
```


## How to use
The package can be run from either a node script or directly in the command line. Both provide the ability to pass options to the package.

### - Javascript

The `convert` function returns a promise.

```
var sassToCssVars = require('sass-to-css-variables');

sassToCssVars.convert(<path to file>, <path to destination>);
```

### - CLI 

Using the CLI you can specifiy the source and output files

```
sass-to-css-variables path/to/files.css -o path/to/output.css
```
or with globbing
```
sass-to-css-variables path/to/all/**/*.css
```

Note: Currently globbing only allows you to overwrite existing files

## Contribute

Once you've cloned the Github repository, you will need to run `yarn install` to install the required dependencies to build the package. There are basic tests in `test/test.js` which can be run to check that the code works as required.

Feel free to make it better :heart:

Built by [@samuelthomps0n](http://github.com/samuelthomps0n)