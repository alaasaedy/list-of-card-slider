import Styles from './styles.module.scss'
import Search from '../search'
import Filter from '../filter'

function SearchFilterContainer({ albums, setFilterQuery, albumsCount }) {
  return (
    <div className={Styles['search-filter-container']}>
      <Search setFilterQuery={setFilterQuery} />
      <Filter
        albums={albums}
        albumsCount={albumsCount}
        setFilterQuery={setFilterQuery}
      />
    </div>
  )
}

export default SearchFilterContainer
