import React from 'react'
import Styles from './styles.module.scss'

function Search({setFilterQuery}) {
  return (
    <div className={Styles['search']}>
      <input onChange={(e) => setFilterQuery(e.target.value)} className={Styles['search-input']} type="text" placeholder="Search" />
    </div>
  )
}

export default Search
