export interface MediaItemBase {
  id: number | string;
  title: string;
  poster?: string;
  genre?: string | string[];
  type: 'movie' | 'tv' | 'anime' | 'game' | 'music' | 'book';
  status?:
    | 'watching'
    | 'completed'
    | 'onHold'
    | 'dropped'
    | 'wishlist'
    | 'playing'
    | 'read'
    | 'listened';

  // Ratings
  userRating?: number | null; // 0-10 (editable)
  globalRating?: number | null; // 0-10 (avg)
  globalVotes?: number; // πόσοι ψήφισαν

  // Popularity
  popularity?: number;

  rating?: number | null;
  year?: number;
  episodes?: number;
  duration?: number;
  progress?: number;
  lastWatched?: number;
  authorOrStudio?: string;
  [key: string]: any;
}

export interface UserMediaLists {
  watching: MediaItemBase[];
  completed: MediaItemBase[];
  onHold: MediaItemBase[];
  dropped: MediaItemBase[];
  favorites: MediaItemBase[];
  hated: MediaItemBase[];
  [key: string]: MediaItemBase[];
}

export interface AllUserMedia {
  anime: UserMediaLists;
  movies: UserMediaLists;
  games: UserMediaLists;
  tvSeries: UserMediaLists;
  music: UserMediaLists;
  books: UserMediaLists;
}

export interface MediaTab {
  key: string;
  label: string;
  count: number;
}
