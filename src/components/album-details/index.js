import { useEffect, useRef, useState } from "react";
import Styles from './styles.module.scss'
import groupByArray from '../helper'

const AlbumDetils = ({ albums, albumId, setAlbumId }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);
  const [images, setImages] = useState([]);

  const __albumimgs = groupByArray(albums, 'albumId')

  useEffect(() => {
    if (albumId) {
      const matching = __albumimgs?.filter(_album => _album['key'] == albumId);
      const images = matching?.map(_item => {
        return _item['values'].map((_val, indx)=> ({
          id: indx,
          url:  _val['url']
        }))
      })
      setImages(images);
    }
  }, [albumId]);
  
  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images[0].length);
      setSelectedImageIndex(0);
      setSelectedImage(images[0][0]);
    }
  }, [images]);
  
    const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[0][newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
          carouselItemsRef?.current[newIdx]?.scrollIntoView({
              inline: "center",
              behavior: "smooth"
          });
      }
    }
  };
  
    const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images[0].length) {
          newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };
  
  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
          newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className={Styles['carousel-container']}>
    <div className={Styles["selected-image"]} style={{ backgroundImage: `url(${selectedImage?.url})` }}/>
    <div className={Styles["carousel"]}>
      <div className={Styles["carousel__images"]}>
          {images[0]?.map((image, idx) => {
          return (<div onClick={() => handleSelectedImageChange(idx)} style={{ backgroundImage: `url(${image.url})` }} key={image.id} className={`${Styles['carousel__image']} ${selectedImageIndex === idx && Styles["carousel__image-selected"]}`} ref={(el) => (carouselItemsRef.current[idx] = el)}> </div>)
        })}
      </div>
      <button className={`${Styles["carousel__button"]} ${Styles["carousel__button-left"]}`} onClick={handleLeftClick}>
        &#8249;
      </button>
      <button className={`${Styles["carousel__button"]} ${Styles["carousel__button-right"]}`} onClick={handleRightClick}>
        &#8250;
      </button>
      </div>
      
      <div className={Styles['prev-next-album']}>
        <button className={Styles['prev-album']} onClick={() => {
          setAlbumId(_prev => _prev == 1 ? setAlbumId(1) : setAlbumId(_prev - 1))
        }}>Previous Album</button>
        <button className={Styles['next-album']} onClick={() => setAlbumId(_prev => _prev == __albumimgs.length ? setAlbumId(__albumimgs.length) : setAlbumId(_prev + 1) )}>Next Album</button>
      </div>
  </div>
  );
};

export default AlbumDetils;
