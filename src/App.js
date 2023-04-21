import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewMovies } from "./components/NewMovies";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Avatar 2",
      url: "https://images.theconversation.com/files/500899/original/file-20221214-461-22jr1l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crops",
      rating: 3,
    },
  ]);

  const addNewMovie = (data) => {
    const favoriteMovies = [...movies];
    favoriteMovies.push(data);
    setMovies(favoriteMovies);
  };

  return (
    <div className="App">
      <Header addNewMovie={addNewMovie} />
      <NewMovies movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;
