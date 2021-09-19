

let collection = [];

function addToCollection(title, artist, yearPublished){
let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
}
collection.push(album);
return album;
}
addToCollection( 'Aspiration', 'After The Burial', 2008 );
addToCollection( 'Bezerker', 'After The Burial', 2008 );
addToCollection( 'Master of Puppets', 'Metallica', 1988 );
addToCollection( 'The World Is Yours', 'Nas', 1993 );
addToCollection( 'Black Ice', 'Goodie Mob', 2007 );
addToCollection( 'Kick In The Door', 'Notorious BIG', 1997 );


console.log(collection);


function showCollection(albums){
  for( let i = 0; i < albums.length; i++) {
  console.log('TITLE:', albums[i].title, 'ARTIST:',
  albums[i].artist,'RELEASE DATE:', albums[i].yearPublished );
 }
}
console.log(showCollection(collection) );

function findByArtist(artist){
let found = [];
for(let i in collection) {
if(artist === collection[i].artist){
  found.push(collection[i]);
  }
} return console.log('artist found: ', found.length, found);
};
console.log('Artist Search');
findByArtist('After The Burial');
