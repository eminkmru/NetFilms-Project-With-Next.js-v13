import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) {
  const randomMovie = Math.floor(Math.random() * topRatedMovies.length);

  const randomMovies = [];

  for (let i = 0; i < 6; i++) {
    const randomMovie = Math.floor(Math.random() * popularMovies.length);

    randomMovies.push(popularMovies[randomMovie]);
  }

  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[randomMovie]} />

      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => {
              return genre.id === parseInt(selectedCategory.id);
            }).name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Popular Films" movies={randomMovies} />
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(0, 6)}
      />
      <MoviesSection
        title="Your Favorite Films"
        movies={topRatedMovies.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
