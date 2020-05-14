var playlist={AllisonKrause:"Whiskey Lulliby"}


function updatePlaylist(playlist,artist,song){
  playlist[artist] = song;
  return playlist
}
  

function removeFromPlaylist(playlist,artist){
  delete [artist]
  return playlist
}

function name(object,key)
  delete[key]
  return object