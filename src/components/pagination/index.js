import Styles from './styles.module.scss'
import { useState } from 'react'


function Pagination({ albumsPerPage, totalAlbums, currentPage, setCurrentPage, currentAlbums }) {

  // Minimize page numbers
  const [pageNumLimits] = useState(8);
  const [maxPageNumLimits, setMaxPageNumLimits] = useState(8);
  const [minPageNumLimits, setMinPageNumLimits] = useState(0);

  const pageNumbers = [];
  
  for (let i = 1; i < Math.ceil(totalAlbums / albumsPerPage); i++) {
    pageNumbers.push(i)
  }

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Handle Prev & Next
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumLimits) {
      setMaxPageNumLimits(maxPageNumLimits + pageNumLimits)
      setMinPageNumLimits(minPageNumLimits + pageNumLimits)
    }
  }

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumLimits == 0) {
      setMaxPageNumLimits(maxPageNumLimits - pageNumLimits)
      setMinPageNumLimits(minPageNumLimits - pageNumLimits)
    }
  }

  return (
    <>
      {currentAlbums.length >= 12 && (
        <ul className={Styles['pagination']}>
        <li className={`${Styles['page-item']} ${currentPage == pageNumbers[0] ? Styles['page-item-disabled'] : ''}`}>
          <button
            disabled={currentPage == pageNumbers[0] ? true : false}
            onClick={() => handlePrevBtn()}
            className={Styles['page-link']}>
            Previous</button>
        </li>
        {pageNumbers.map((_page) => {
          if (_page < maxPageNumLimits + 1 && _page > minPageNumLimits) {
            return (
              <li className={`${Styles['page-item']} ${currentPage === _page ? Styles['page-item-active'] : ''}`} id={_page} key={_page}>
                <button
                  onClick={() => { paginate(_page) }}
                  className={Styles['page-link']}>
                  {_page}
                </button>
              </li>
            )
          } else {
            return null;
          }
        })}
        <li className={`${Styles['page-item']} ${currentPage == pageNumbers[pageNumbers.length - 1] ? Styles['page-item-disabled'] : ''}`}>
          <button
            disabled={currentPage == pageNumbers[pageNumbers.length - 1] ? true : false}
            onClick={() => handleNextBtn()}
            className={Styles['page-link']}>
            Next</button>
        </li>
      </ul>
      )}
    </>
  )
}

export default Pagination
