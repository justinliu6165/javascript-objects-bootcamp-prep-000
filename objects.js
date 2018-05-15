var playlist = {
  bobDylan: "The times they are a changin",
  beachHouse: "Space song",
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

