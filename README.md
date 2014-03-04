# Custom Bootstrap Build [![Build Status](https://travis-ci.org/benjaminach/custom-bootstrap-build.png?branch=master)](https://travis-ci.org/benjaminach/custom-bootstrap-build) [![Dependency Status](https://gemnasium.com/benjaminach/custom-bootstrap-build.png)](https://gemnasium.com/benjaminach/custom-bootstrap-build) [![GitHub version](https://badge.fury.io/gh/benjaminach%2Fcustom-bootstrap-build.png)](http://badge.fury.io/gh/benjaminach%2Fcustom-bootstrap-build)

Create a custom Bootstrap 3.1.1 build with jQuery and Parsley.

## Setup

1. Install [Node.js](http://nodejs.org/)
2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli) ```$ npm install -g grunt```
3. Install [Bower](http://bower.io/#installing-bower) ```$ npm install -g bower```
4. Clone repository
```
$ git clone
```
6. ```$ cd custom-bootstrap-build```
7. Install bower dependencies  ```$ bower install```
8. Install nodejs dependencies ```$ npm install```

## Use

- Pictures in /images
- Less and CSS in /less
- Fonts in /fonts
- Build in /dist

## Build

1. ```$ grunt``` creates the /dist directory with compiled files.
2. ```$ grunt watch``` this is a convenience method for watching just Less files and automatically building them whenever you save.

## Testing 
1. ```$ grunt connect:serve``` for local testing http://localhost:9001/
2. ```$ grunt test``` build and runs JSHint and CSSHint to check files
3. ```$ grunt cleanjs``` runs JSHint and CSSHint to modify files
4. ```$ grunt perf``` run phantomas to check front-end performance


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/benjaminach/custom-bootstrap-build/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

