# mallete-design-system #


### Requirements
* [NodeJS](https://nodejs.org/en/)
* [Gulp CLI](https://gulpjs.com/docs/en/getting-started/quick-start/#install-the-gulp-command-line-utility)
    * Install the gulp command line utility `npm install --global gulp-cli`


### Installation
2. Open NodeJS prompt and change directory to root folder
3. Install dependencies using `npm install`


## Usage

### Default Mode
Execute `gulp` from the command line to compile the front-end prototype one time.  

* After executing `gulp` the output can be found in the `~/dist` folder

### Watch Mode
Execute `gulp watch` from the command line to compile the front-end prototype and watch for changes. Much like the Default mode, Watch mode compiles the prototype to the `~/dist` folder.  The main difference is that file watchers automatically recompile templates, styles, and scripts as changes are made.

* Navigate to `~/dist` to observe the compiled prototype


### Serve Mode
Execute `gulp serve` from the command line to start in `serve` mode.  When run in `serve` mode the templates are compiled and hosted from a built-in webserver and file watchers automatically recompile templates, styles, and scripts as changes are made.

* Navigate to http://localhost:3000/ to browser to observe the compiled templates