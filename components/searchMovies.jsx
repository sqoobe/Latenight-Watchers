import React, {useState} from "react";
import MovieCard from "./movieCard";

/**
 * SearchMovies - Komponent for å søke etter filmer
 * 
 * Denne komponenten lar brukeren søke etter filmer ved hjelp av TMDB API.
 * Den håndterer både input fra brukeren, API-forespørsler og visning av
 * søkeresultater i form av MovieCard-komponenter.
 * 
 * @returns {JSX.Element} - Rendret søkeskjema og liste med filmkort
 */
export default function SearchMovies() {

  // State for søketekst fra bruker
  const [query, setQuery] = useState('');
  
  // State for filmresultater fra API
  const [movies, setMovies] = useState([]);
  
  /**
   * Funksjon for å søke etter filmer via TMDB API
   * 
   * @param {Event} e - Submit-hendelsen fra skjemaet
   */
  const searchMovies = async (e) => {
    e.preventDefault(); // Forhindrer standardoppførsel med sideoppdatering
    
    // URL for TMDB API med søketekst fra brukeren
    const url = `https://api.themoviedb.org/3/search/movie?api_key=37c0f7cf8ebd0ea898354c7c6ce17fc7&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      // Utfør API-forespørsel
      const res = await fetch(url);
      // Konverter respons til JSON
      const data = await res.json();
      // Oppdater movies state med resultatene
      setMovies(data.results);
    } catch(err) {
      // Håndter feil under API-forespørselen
      console.error(err);
    }
  }

  return (
  <>
    {/* Søkeskjema */}
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query} 
        onChange={(e) => setQuery(e.target.value)} // Oppdater query state ved endring
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
    
    {/* Liste med filmkort */}
    <div className="card-list">
        {/* Filtrer ut filmer uten poster og map hver film til en MovieCard-komponent */}
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>    
  </>
  );
}