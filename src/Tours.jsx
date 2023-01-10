import Tour from './Tour.jsx'
import './Tours.css';

const Tours = ({tours, handleClick}) => {
  return(
    <div className= 'tour-wrap'>
      <div className= 'title'>
        <h3>{tours.length > 0 ? 'Our Tours' : 'No Tours To Show'}</h3>
      </div>
      <div className= 'spacer'></div>
      <div className= 'tours'>
        {tours.map(tour => (
        <Tour tour= {tour} key= {tour.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  
  )
}

export default Tours;