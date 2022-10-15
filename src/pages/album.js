import AlbumDetails from "../components/album-details";


function Album({albums, albumId, setAlbumId}) {
  return (
    <AlbumDetails
      albums={albums}
      albumId={albumId || 1}
      setAlbumId={setAlbumId} />
  )
}

export default Album
