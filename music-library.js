let library = function(name, creator) {
  this.name      = name;
  this.creator   = creator;
  this.playlists = [];
}

let playlist = function(name) {
  this.name   = name;
  this.tracks = [];
}

let track = function(title, rating, length) {
  this.title  = title;
  this.rating = rating;
  this.length = length;
}

playlist.prototype.addToLibrary = function(library) {
  library.playlists.push(this);
}

playlist.prototype.overallRating = function() {
  let totalRating = 0;
  let tracksCount = 0;
  this.tracks.forEach((track) => {
    totalRating += track.rating;
    tracksCount += 1;
  });
  return (totalRating / tracksCount);
}

playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.length;
  });
  return totalDuration;
}

track.prototype.addToPlaylist = function(playlist) {
  playlist.tracks.push(this);
}

var libraryOne = new library("libraryOne", "Jesus");
var jamPlaylist = new playlist("jam");
jamPlaylist.addToLibrary(libraryOne);
var songOne = new track("UNTITLED", 5, 240);
songOne.addToPlaylist(jamPlaylist);
console.log(libraryOne);
console.log(jamPlaylist);
console.log(songOne);
console.log(jamPlaylist.overallRating());
console.log(jamPlaylist.totalDuration());

