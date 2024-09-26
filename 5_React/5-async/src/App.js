import { getFetchThen, getAwait } from "./api/movie";
import { useEffect, useState } from "react";




const App= () => {

  const [date, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    });
  };


  useEffect(() => {
    loadFetchThen();
  }, []);
  return (
  <>
    {data.map((movie) => (
      <div key={movie.id}>
      <h1>{movie.title}</h1>
      <h2>{movie.actor}</h2>
      </div>
    ))}
  </>
  );
};


export default App;