# Custom Bootstrap Build

Create a custom Bootstrap 3.0.3 build with jQuery and Parsley.

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
1. ```$ grunt connect:iserver``` pour un test en local sur http://localhost:9001/
2. ```$ grunt verify``` runs JSHint and CSSHint to check files
3. ```$ grunt clean``` runs JSHint and CSSHint to modify files
4. ```$ grunt perf``` run phantomas to check front-end performance