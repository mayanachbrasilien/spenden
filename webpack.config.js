const path = require( "path" );
const { genScss, genPug } = require( "setup-webpack" );

const scss = genScss( `./main.css` );
const pug = genPug( `./main.html` );

module.exports = {
  entry : `./src/bundles/main.bundle.js`,
  output: {
    path    : path.resolve( __dirname, "dist" ),
    filename: `main.js`,
  },
  module: {
    loaders: [ scss.loader, pug.loader ],
  },
  plugins: [ scss.plugin, pug.plugin ],
};
