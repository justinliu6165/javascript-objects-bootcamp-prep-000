var playlist = {
  artist: "",
  song: "",
};

function updatePlaylist(playlist, name, title){
  playlist.artist = name;
  playlist.song = title;
  return playlist;
}