import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MediaContinueWatching } from '../../shared/components/media-continue-watching/media-continue-watching';
import { MediaUserStats } from '../../shared/components/media-user-stats/media-user-stats';
import { MediaHeroHeader } from '../../shared/components/media-hero-header/media-hero-header';
import { MediaSearchAndResults } from '../../shared/components/media-search-and-results/media-search-and-results';
import { MediaWatchingList } from '../../shared/components/media-watching-list/media-watching-list';
import { MediaUserLists } from '../../shared/components/media-user-lists/media-user-lists';
import { Trending } from '../../shared/components/trending/trending';
import { Recommendations } from '../../shared/components/recommendations/recommendations';
import {
  continueWatchingMoviesMock,
  recommendationsMoviesMock,
  searchResultsMoviesMock,
  trendingMoviesMock,
  userMovieListsMock,
  userMovieStatsMock,
} from '../../mocks/movie.mock';

@Component({
  selector: 'app-movies',
  imports: [
    CommonModule,
    Recommendations,
    Trending,
    MediaUserLists,
    MediaWatchingList,
    MediaSearchAndResults,
    MediaHeroHeader,
    MediaUserStats,
    MediaContinueWatching,
  ],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
  standalone: true,
})
export class Movies {
  searchResults = signal(searchResultsMoviesMock);
  userLists = signal(userMovieListsMock);
  continueWatching = signal(continueWatchingMoviesMock);
  trendingMovies = signal(trendingMoviesMock);
  recommendations = signal(recommendationsMoviesMock);
  userStats = signal(userMovieStatsMock);

  activeTab = signal<'all' | 'watching' | 'completed' | 'onHold' | 'dropped'>(
    'all'
  );

  items = computed(() => {
    const tab = this.activeTab();
    const lists = this.userLists();
    if (tab === 'all') {
      return [
        ...lists.watching,
        ...lists.completed,
        ...lists.onHold,
        ...lists.dropped,
      ];
    }
    return lists[tab];
  });

  allMoviesCount = computed(() => {
    const lists = this.userLists();
    return (
      lists.watching.length +
      lists.completed.length +
      lists.onHold.length +
      lists.dropped.length
    );
  });

  watchingCount = computed(() => this.userLists().watching.length);
  completedCount = computed(() => this.userLists().completed.length);
  onHoldCount = computed(() => this.userLists().onHold.length);
  droppedCount = computed(() => this.userLists().dropped.length);

  tabs = computed(() => [
    { key: 'all', label: 'All Movies', count: this.allMoviesCount() },
    { key: 'watching', label: 'Watching', count: this.watchingCount() },
    { key: 'completed', label: 'Completed', count: this.completedCount() },
    { key: 'onHold', label: 'On Hold', count: this.onHoldCount() },
    { key: 'dropped', label: 'Dropped', count: this.droppedCount() },
  ]);

  onTabChange(tabKey: string) {
    this.activeTab.set(tabKey as any);
  }

  openMovieDetails($event: any) {
    console.log('Movie details clicked:', $event);
  }

  onResume(item: any) {
    console.log('Resume clicked:', item);
  }
}
