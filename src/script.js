const lis = [ ...document.getElementsByTagName( "header" )[0].getElementsByTagName( "li" ) ];
const checkbox = document.getElementById( "responsive-menu" );

lis.forEach( li => li.addEventListener( "click", () => checkbox.checked = false ) );

const mission = [ ...document.getElementsByClassName( "mission-link" ) ];
const me = [ ...document.getElementsByClassName( "me-link" ) ];
const orga = [ ...document.getElementsByClassName( "orga-link" ) ];
const support = [ ...document.getElementsByClassName( "support-link" ) ];

[ ...mission, ...me, ...orga, ...support ].map( x => x.addEventListener( "click", () => {
  setTimeout( () => {
    window.scroll( 0, window.scrollY - 120 );
  }, 10 );
} ) );
