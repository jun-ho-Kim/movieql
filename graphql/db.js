let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id = id);
    return filteredMovie[0];
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: parseInt(`${movies.length +1}`),
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanMovie = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanMovie.length) {
        movies = cleanMovie;
        return true;
    } else {
        return false;
    }
};