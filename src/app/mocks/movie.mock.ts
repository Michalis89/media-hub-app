import { MediaItemBase, UserMediaLists } from '../models/models';

// Dummy Movies
export const userMovieListsMock: UserMediaLists = {
  watching: [
    {
      id: 1,
      title: 'Dune: Part Two',
      year: 2024,
      genre: ['Sci-Fi', 'Adventure'],
      duration: 165,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'watching',
      rating: 8.7,
      authorOrStudio: 'Denis Villeneuve',
    },
  ],
  completed: [
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: ['Drama'],
      duration: 142,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'completed',
      rating: 9.3,
      authorOrStudio: 'Frank Darabont',
    },
    {
      id: 3,
      title: 'Inception',
      year: 2010,
      genre: ['Sci-Fi', 'Thriller'],
      duration: 148,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'completed',
      rating: 8.8,
      authorOrStudio: 'Christopher Nolan',
    },
  ],
  onHold: [
    {
      id: 4,
      title: 'Blade Runner 2049',
      year: 2017,
      genre: ['Sci-Fi', 'Mystery'],
      duration: 164,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'onHold',
      rating: 8.0,
      authorOrStudio: 'Denis Villeneuve',
    },
  ],
  dropped: [
    {
      id: 5,
      title: 'Cats',
      year: 2019,
      genre: ['Comedy', 'Musical'],
      duration: 110,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'dropped',
      rating: 2.7,
      authorOrStudio: 'Tom Hooper',
    },
  ],
  favorites: [
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: ['Drama'],
      duration: 142,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'completed',
      rating: 9.3,
      authorOrStudio: 'Frank Darabont',
    },
  ],
  hated: [
    {
      id: 5,
      title: 'Cats',
      year: 2019,
      genre: ['Comedy', 'Musical'],
      duration: 110,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
      type: 'movie',
      status: 'dropped',
      rating: 2.7,
      authorOrStudio: 'Tom Hooper',
    },
  ],
};

// Continue Watching List
export const continueWatchingMoviesMock: MediaItemBase[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    year: 2024,
    genre: ['Sci-Fi', 'Adventure'],
    duration: 165,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'watching',
    rating: 8.7,
    authorOrStudio: 'Denis Villeneuve',
    progress: 60, // πχ 60%
  },
];

// Search Results List
export const searchResultsMoviesMock: MediaItemBase[] = [
  {
    id: 6,
    title: 'Interstellar',
    year: 2014,
    genre: ['Sci-Fi', 'Drama'],
    duration: 169,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'completed',
    rating: 8.6,
    authorOrStudio: 'Christopher Nolan',
  },
  {
    id: 7,
    title: 'The Godfather',
    year: 1972,
    genre: ['Crime', 'Drama'],
    duration: 175,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'completed',
    rating: 9.2,
    authorOrStudio: 'Francis Ford Coppola',
  },
];

// Trending List
export const trendingMoviesMock: MediaItemBase[] = [
  {
    id: 1,
    title: 'Dune: Part Two',
    year: 2024,
    genre: ['Sci-Fi', 'Adventure'],
    duration: 165,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'watching',
    rating: 8.7,
    authorOrStudio: 'Denis Villeneuve',
  },
  {
    id: 3,
    title: 'Inception',
    year: 2010,
    genre: ['Sci-Fi', 'Thriller'],
    duration: 148,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'completed',
    rating: 8.8,
    authorOrStudio: 'Christopher Nolan',
  },
];

// Recommendations List
export const recommendationsMoviesMock: MediaItemBase[] = [
  {
    id: 8,
    title: 'Whiplash',
    year: 2014,
    genre: ['Drama', 'Music'],
    duration: 106,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'completed',
    rating: 8.5,
    authorOrStudio: 'Damien Chazelle',
  },
  {
    id: 9,
    title: 'Parasite',
    year: 2019,
    genre: ['Drama', 'Thriller'],
    duration: 132,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    type: 'movie',
    status: 'completed',
    rating: 8.5,
    authorOrStudio: 'Bong Joon-ho',
  },
];

// Stats List
export const userMovieStatsMock = [
  { label: 'Completed', value: 2 },
  { label: 'Watching', value: 1 },
  { label: 'On Hold', value: 1 },
  { label: 'Dropped', value: 1 },
  { label: 'Total Watched', value: '600h' },
];
