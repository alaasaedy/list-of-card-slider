
import Styles from './styles.module.scss'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function GalleryCard({ imgSrc, title, id, setAlbumId }) {
  return (
      <div className={Styles['card']}>
        <img className={Styles['card-img']} src={imgSrc} alt={title} />
      <h5 className={Styles['card-title']}>{title}</h5>
      <Link onClick={() => setAlbumId(id)} className={Styles['card-url']} to='/album'>
        View Gallery
      </Link>
      </div>
  )
}

export default GalleryCard
