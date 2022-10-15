import { useState, useEffect } from 'react'
import GalleryCard from '../gallery-card';
import Pagination from '../pagination'
import Styles from './styles.module.scss'
import groupByArray from '../helper'


function Gallery({ albums, filterQuery, setAlbumId }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [albumsPerPage] = useState(12);

  useEffect(() => {
  }, [filterQuery])

  const __albums = groupByArray(albums, 'albumId');

  // Get Current Albums
  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = filterQuery? __albums.filter(_album => _album['key'] == filterQuery) : __albums.slice(indexOfFirstAlbum, indexOfLastAlbum)
  
  return (
    <>
      {currentAlbums ? <div className={Styles['gallery-container']}>
        <div className={Styles['gallery']}>
          {currentAlbums?.map(_album => {
              const { thumbnailUrl, title, url } = _album['values'][0]
            return (
              <GalleryCard
              key={_album['key']}
              imgSrc={thumbnailUrl}
              title={title}
              url={url}
              id={_album['key']}
              setAlbumId={setAlbumId}
              />
              )
            })
          }
        </div>
        <Pagination
          albumsPerPage={albumsPerPage}
          totalAlbums={__albums?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentAlbums={currentAlbums}
        />
      </div> : <p>Loading...</p>}
    </>
  )
}

export default Gallery
