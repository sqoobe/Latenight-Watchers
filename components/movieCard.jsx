import React from "react"

/**
 * MovieCard - Komponent for å vise informasjon om en film
 * 
 * Denne komponenten tar imot et movie-objekt som prop og viser 
 * filmens poster, tittel, utgivelsesdato, vurdering og beskrivelse
 * i et kort-format.
 * 
 * @param {Object} props - Komponentens props
 * @param {Object} props.movie - Filmobjekt med informasjon fra TMDB API
 * @returns {JSX.Element} - Rendret filmkort
 */
export default function MovieCard({movie}) {
    return (
        <div className="card">
            {/* Filmposter fra TMDB API med w185_and_h278_bestv2 størrelse */}
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'} // Tilgjengelig alt-tekst for skjermlesere
            />
            <div className="card--content">
                {/* Filmtittel */}
                <h3 className="card--title">{movie.title}</h3>
                
                {/* Informasjon om utgivelsesdato */}
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                
                {/* Filmens vurdering basert på stemmer */}
                <p><small>RATING: {movie.vote_average}</small></p>
                
                {/* Filmbeskrivelse/sammendrag */}
                <p className="card--desc">{movie.overview}</p>
            </div>
        </div>
    )
}