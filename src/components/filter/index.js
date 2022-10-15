import Styles from './styles.module.scss'
import { useState } from 'react'
import groupByArray from '../helper'


function Filter({ albums, setFilterQuery }) {
  const allAlbums = groupByArray(albums, 'albumId')
  const length = allAlbums?.length
  const [listNum, setListNum] = useState(4)
  
  const listItems = []
  for (let i = 1; i < length; i++) {
    listItems.push(i)
  }

  const viewMoreOnClick = () => {
    let newListItem;
    if (listNum + 5 < length)
      newListItem = listNum + 5;
    else
    newListItem = length - 1;
    setListNum(_prev => newListItem)
  }

  return (
    <>
      {allAlbums && (
        <div className={Styles['filter']}>
        <h3>Filter</h3>
        <ul className={Styles['filter-list']}>
          <li><button onClick={() => {setFilterQuery(null)}}>All</button></li>
          {listItems ? listItems.slice(0, listNum).map(_album => <li key={_album}>
            <button onClick={() => setFilterQuery(_album)}>Album {_album}</button>
          </li>) : ''}
          {(length > listNum + 1) && <li onClick={viewMoreOnClick} className={Styles['view-more']}><button>+ View more</button></li>}
        </ul>
      </div>
    )}
    </>
  )
}

export default Filter
