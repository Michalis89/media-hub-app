import { MediaItemBase, UserMediaLists } from '../models/models';

// 1. Τα αντικείμενα όλα μαζί, ώστε να μην έχουμε duplicate δεδομένα
const animeBase: MediaItemBase[] = [
  {
    id: 1,
    title: 'Naruto',
    type: 'anime',
    genre: 'Shonen',
    episodes: 220,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2002,
    authorOrStudio: 'Pierrot',
  },
  {
    id: 2,
    title: 'Your Lie in April',
    type: 'anime',
    genre: 'Drama',
    episodes: 22,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2014,
    authorOrStudio: 'A-1 Pictures',
  },
  {
    id: 3,
    title: 'One Piece',
    type: 'anime',
    genre: 'Adventure',
    episodes: 1000,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'watching',
    year: 1999,
    authorOrStudio: 'Toei Animation',
    userRating: 8.5,
    globalRating: 8.7,
    globalVotes: 53421,
    popularity: 120345,
    lastWatched: 500,
  },
  {
    id: 4,
    title: 'Jujutsu Kaisen',
    type: 'anime',
    genre: 'Action',
    episodes: 24,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'watching',
    year: 2020,
    authorOrStudio: 'MAPPA',
  },
  {
    id: 5,
    title: 'Fullmetal Alchemist: Brotherhood',
    type: 'anime',
    genre: 'Shonen',
    episodes: 64,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'completed',
    year: 2009,
    authorOrStudio: 'Bones',
  },
  {
    id: 6,
    title: 'Death Note',
    type: 'anime',
    genre: 'Psychological',
    episodes: 37,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'completed',
    year: 2006,
    authorOrStudio: 'Madhouse',
  },
  {
    id: 7,
    title: 'Ex-Arm',
    type: 'anime',
    genre: 'Sci-Fi',
    episodes: 12,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'dropped',
    year: 2021,
    authorOrStudio: 'Visual Flight',
  },
];

// 2. User lists structured με βάση τα ids παραπάνω
export const userAnimeListsMock: UserMediaLists = {
  watching: [animeBase[2], animeBase[3]], // One Piece, Jujutsu Kaisen
  completed: [animeBase[4], animeBase[5]], // FMA:B, Death Note
  onHold: [],
  dropped: [animeBase[6]], // Ex-Arm
  favorites: [animeBase[4]], // FMA:B
  hated: [animeBase[6]], // Ex-Arm
};

// 3. Search results mock (μπορείς να τα αλλάζεις όπως θες)
export const searchResultsAnimeMock: MediaItemBase[] = [
  animeBase[0], // Naruto
  animeBase[1], // Your Lie in April
];

// 4. Continue watching
export const continueWatchingAnimeMock: MediaItemBase[] = [
  {
    id: 10,
    title: 'Bleach',
    type: 'anime',
    genre: 'Shonen',
    episodes: 366,
    lastWatched: 105,
    progress: 29,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    status: 'watching',
    year: 2004,
    authorOrStudio: 'Pierrot',
  },
  // Μπορείς να βάλεις όσες φορές θες
];

// 5. Trending anime (βάζουμε νέα ids για unique)
export const trendingAnimeMock: MediaItemBase[] = [
  {
    id: 30,
    title: 'Chainsaw Man',
    type: 'anime',
    genre: 'Action / Horror',
    episodes: 12,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2022,
    authorOrStudio: 'MAPPA',
  },
  {
    id: 31,
    title: 'Spy x Family',
    type: 'anime',
    genre: 'Comedy / Action',
    episodes: 25,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2022,
    authorOrStudio: 'Wit Studio',
  },
  {
    id: 32,
    title: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    genre: 'Action / Supernatural',
    episodes: 13,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2022,
    authorOrStudio: 'Pierrot',
  },
  {
    id: 33,
    title: 'Frieren: Beyond Journey’s End',
    type: 'anime',
    genre: 'Fantasy / Drama',
    episodes: 24,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2023,
    authorOrStudio: 'Madhouse',
  },
  {
    id: 34,
    title: 'Demon Slayer: Hashira Training Arc',
    type: 'anime',
    genre: 'Action / Adventure',
    episodes: 8,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2024,
    authorOrStudio: 'ufotable',
  },
  // Κλπ...
];

// 6. Recommendations
export const recommendationsAnimeMock: MediaItemBase[] = [
  {
    id: 100,
    title: 'Erased',
    type: 'anime',
    genre: 'Mystery / Drama',
    episodes: 12,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2016,
    authorOrStudio: 'A-1 Pictures',
  },
  {
    id: 101,
    title: 'Tokyo Revengers',
    type: 'anime',
    genre: 'Action / Time Travel',
    episodes: 24,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2021,
    authorOrStudio: 'Liden Films',
  },
  {
    id: 102,
    title: 'Steins;Gate',
    type: 'anime',
    genre: 'Sci-Fi / Thriller',
    episodes: 24,
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s',
    year: 2011,
    authorOrStudio: 'White Fox',
  },
];

// 7. User stats (for your stats card)
export const userAnimeStatsMock = [
  { label: 'Completed', value: 37 },
  { label: 'Watching', value: 3 },
  { label: 'On Hold', value: 1 },
  { label: 'Dropped', value: 1 },
  { label: 'Total Watched', value: '64h' },
];
