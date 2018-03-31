const path = require( "path" );
const { genScss, genPug } = require( "setup-webpack" );

const scss = genScss( `./style.css` );
const pug = genPug( `./index.html` );

module.exports = {
  entry : `./src/bundles/main.bundle.js`,
  output: {
    path    : __dirname,
    filename: `script.js`,
  },
  module: {
    loaders: [ scss.loader, pug.loader ],
  },
  plugins: [ scss.plugin, pug.plugin ],
};
