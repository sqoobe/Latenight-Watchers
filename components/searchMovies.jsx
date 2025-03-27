import React from "react";

export default function SearchMovies() {
  
  const searchMovies = async (e) => {
    e.preventDefault();//prevent from doing its default action of posting its data in a query
    console.log("Submitting")

    const query ="Jurassic Park"

    const url = `https://api.themoviedb.org/3/search/movie?api_key=37c0f7cf8ebd0ea898354c7c6ce17fc7&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url) 
      const data = await res.json()
      console.log(data)
    
  }catch(err){
    console.error(err);
  }
}


  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
