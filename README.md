Static-starter-kit
==================

Starter kit for simple static website.
It uses Jade for templating and less for extending CSS features. Additionnaly it's include imagemin for minifying image of your site.


## Installation
`npm install`

## Usage
#### watch
`gulp watch` for watch all the project changing (images, templates, less)

#### jade
`gulp jade` will compile your jade files into the **dist** directory.

#### less
`gulp less` will compile your less files into the **dist/css** directory. By default, a **styles.less** will deserved as a container for your style

#### imagemin
`gulp images ` will reduce the size of all your images and set them in the **dist/images** directory
