import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: "Schindler's List", genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 } ];
const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
function App() {
  const [selectGenre,setSelectGenre]=useState(movies);
  const handleGenre=(genre)=>{
    const movie=movies.filter((moive)=>moive.genre===genre);
    setSelectGenre(movie)
  }
  return (
    <div className="App">
      <h1 className='title'>Top 15 Movies of All Time</h1>
      <div className='genre'>
        <h2 className='filter'>Filter by Genre</h2>
        <div className='button-div'>
          {
          genres.map((genre,index)=>(
            <button onClick={()=>handleGenre(genre)} key={index} className='button'>{genre}</button>
          ))
        }
        </div>
      </div>
      <div className='movies'>
        <table className='table'>
          <thead>
            <tr className='row-head'>
              <th className='data-title'>Title</th>
            <th className='data-genre'>Genre</th>
            <th className='data-year'>Year</th>
            </tr>
          </thead>
          <tbody>
                  {
                  selectGenre.map((moive,index)=>(
                    <tr key={index}>
                      <td className='data-title'>{moive.title}</td>
                      <td className='data-genre'>{moive.genre}</td>
                      <td className='data-year'>{moive.year}</td>
                    </tr>
                  ))
                }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
