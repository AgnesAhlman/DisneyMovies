const baseUrl = 'https://express-api-starter-3bvpqy4hiq-lz.a.run.app';

// Fetch All Movies

export const getMovies = () => {
  return fetch(`${baseUrl}/movies`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};

// Fetch Movie By Title

export const getMoviesByTitle = (title) => {
  console.log('title', title);

  return fetch(`${baseUrl}/movies?&title=${title}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error(error));
};

// Fetch Movie By Year

export const getMoviesByYear = (year) => {
  console.log('title', year);

  return fetch(`${baseUrl}/movies?&year=${year}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
