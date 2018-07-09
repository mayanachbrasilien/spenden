const path = require( "path" );
const { genScss, genPug } = require( "setup-webpack" );

const config = [];

[ "index" ].forEach( name => {
  const scss = genScss( `./style.css` );
  const pug = genPug( `./${name}.html` );

  config.push( {
    entry : `./src/bundles/${name}.bundle.js`,
    output: {
      path    : __dirname,
      filename: `script.js`,
    },
    module: {
      loaders: [ scss.loader, pug.loader ],
    },
    plugins: [ scss.plugin, pug.plugin ],
  } );
} );

module.exports = config;
