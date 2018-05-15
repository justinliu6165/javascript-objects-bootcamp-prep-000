var playlist = {
  bobDylan: "The times they are a changin",
  beachHouse: "Space song",
}

function updatePlaylist(playlists, artistName, songTitle){
  playlists[artistName] = songTitle;
  return playlists;
}

function removeFromPlaylist(playlists, artistName){
  delete playlists.artistName;
  return playlists;
}