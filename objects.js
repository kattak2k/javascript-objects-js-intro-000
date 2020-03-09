var playlist ={"mau": "udiki kaki"}

function updatePlaylist(playlist, artistName, songTitle){
  return object.assign({},playlist,{artistName: songTitle})
}

function removeFromPlaylist(playlist, artistName){
 return playlist.delete(artistName)
}
