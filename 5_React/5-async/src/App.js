import { getFetchThen, getAwait } from "./api/movie";
import { useEffect, useState } from "react";

const App = () => {
  const [date, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    });
  };

  const loadAxios = async () => {
    const result = await getAxios();
    setData(result);
  };

  useEffect(() => {
    // loadFetchThen();
    // loadAwait();
    loadAxios();
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
