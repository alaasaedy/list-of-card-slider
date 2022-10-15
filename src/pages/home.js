import Container from '../components/container'
import SearchFilterContainer from '../components/search-filter-container'
import Gallery from '../components/gallery'
import {useState} from 'react'


function HomePage({albums, setAlbumId}) {
  const [filterQuery, setFilterQuery] = useState(null)
  
  return (
    <>
      <Container size='normal'>
        <div style={{width: '100%'}}> 
          <SearchFilterContainer
          albums={albums}
          setFilterQuery={setFilterQuery}
          />
        </div> 
        <Gallery
          albums={albums}
          filterQuery={filterQuery}
          setAlbumId={setAlbumId}
        />
      </Container>
    </>
  )
}

export default HomePage
