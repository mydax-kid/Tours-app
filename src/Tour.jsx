import './Tour.css'
import {useState} from 'react';

const Tour = ({tour, handleClick}) => {
  const [readMore, setReadMore] = useState(true);
  
  return(
    <div className= 'tour-card'>
      <div className= 'img'>
        <img src= {tour.image} alt= {tour.name} />
      </div>
      <div className= 'info'>
        <h4>{tour.name}</h4>
        <h4>${tour.price}</h4>
      </div>
      <div className= 'content'>
        <p>
          {readMore ? `${tour.info.substring(0, 200)}...` : tour.info}
          <button
            className='readmore'
            onClick= {() => setReadMore(!readMore)}
            >
            {readMore ? 'See More' : 'See Less'}
          </button>
        </p>
      </div>
      <button 
        className= 'btn'
        onClick= {() => {
          handleClick(tour.id);
      }}
        >Not Interested</button>
    </div>
  )
}

export default Tour;