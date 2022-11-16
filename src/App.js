import Movies from 'components/movies/MoviesIndex';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMovie from 'components/singleMovie/SingleMovieIndex';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
