import './App.css';
import Loading from './Loading.jsx';
import Tours from './Tours.jsx';
import {useState, useEffect} from 'react';

const url= 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    setLoading(true);
    
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      console.log('find me')
      setTours(data);
      setLoading(false);
    }
    catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const handleClick = (id) => {
    const newTours = tours.filter(tour =>tour.id != id);
    setTours(newTours);
  }
  
  if(loading){
    return(
      <main className='load'>
        <Loading />
      </main>
    )
  }
  
  return(
    <main className='main'>
      <Tours tours= {tours} handleClick={handleClick}/>
      <footer></footer>
    </main>
  )

}

export default App;
