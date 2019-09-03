# Queensland Health Insights Package

## Prerequisites
You will need to have node and npm installed.

## Installation
1) Unpack the files into a folder
2) Either run the install.cmd file or type
...
> npm install
...

## Folder Structure
...
root
 |- dev
 |   |- components
 |   |- js
 |   |    - util
 |   |- res
 |   |   |- font
 |   |   |- jpg
 |   |   |- png
 |   |   |- svg
 |   |    - templates
 |    - scss
  - dist
...

In the dev folder lie all the HTML, Js and SaSS files and other resources required to build the distributable site into the dist folder. 

## Build pipeline
Build initiated -> Webpack compiles source and outputs to dist folder -> Grunt copies template files into dist folder -> resulting website validated against WCAG level 2

A watch server has been included. For automatic reload I recommend the Chrome plugin Live Reload 
https://github.com/blaise-io/live-reload#readme

## Commands
install - installs the project dependencies via npm.

build - execute the build pipeline and package the site into the dist folder

watch - start the watch server for continuous integration

serve - start the server on a local http port

## Design notes
The solution is presented as a single page javascript application. It is currently dependency-free so as to allow for easy porting.

The CSS has been designed mobile-first with media breakpoints used via SaSS mixins to provide alternate views for larger screens.




