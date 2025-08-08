import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { Recommendations } from '../../shared/components/recommendations/recommendations';
import { Trending } from '../../shared/components/trending/trending';
import { MediaUserLists } from '../../shared/components/media-user-lists/media-user-lists';
import { MediaWatchingList } from '../../shared/components/media-watching-list/media-watching-list';
import { MediaSearchAndResults } from '../../shared/components/media-search-and-results/media-search-and-results';
import { MediaHeroHeader } from '../../shared/components/media-hero-header/media-hero-header';
import { MediaUserStats } from '../../shared/components/media-user-stats/media-user-stats';
import { MediaContinueWatching } from '../../shared/components/media-continue-watching/media-continue-watching';
import {
  continueWatchingAnimeMock,
  recommendationsAnimeMock,
  searchResultsAnimeMock,
  trendingAnimeMock,
  userAnimeListsMock,
  userAnimeStatsMock,
} from '../../mocks/anime.mock';
import { MediaItemBase, MediaTab } from '../../models/models';

@Component({
  selector: 'app-anime',
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
  templateUrl: './anime.html',
  styleUrl: './anime.css',
  standalone: true,
})
export class Anime {
  searchResults = signal(searchResultsAnimeMock);
  userLists = signal(userAnimeListsMock);
  continueWatching = signal(continueWatchingAnimeMock);
  trendingAnime = signal(trendingAnimeMock);
  recommendations = signal(recommendationsAnimeMock);
  userStats = signal(userAnimeStatsMock);

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

  allAnimeCount = computed(() => {
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

  openAnimeDetails($event: any) {
    console.log('Anime details clicked:', $event);
  }

  tabs = computed<MediaTab[]>(() => [
    { key: 'all', label: 'All Anime', count: this.allAnimeCount() },
    { key: 'watching', label: 'Watching', count: this.watchingCount() },
    { key: 'completed', label: 'Completed', count: this.completedCount() },
    { key: 'onHold', label: 'On Hold', count: this.onHoldCount() },
    { key: 'dropped', label: 'Dropped', count: this.droppedCount() },
  ]);

  onTabChange(tabKey: string) {
    this.activeTab.set(tabKey as any);
  }

  onResume(item: any) {
    console.log('Resume clicked:', item);
  }

  onUserRate(e: { item: MediaItemBase; rating: number }) {
    this.userLists.update((l) =>
      this.patchItem(l, e.item.id, { userRating: e.rating })
    );
  }

  onStatusChange(e: { item: MediaItemBase; status: any }) {
    const id = e.item.id,
      status = e.status;
    this.userLists.update((lists) => {
      // βγάλε απ’ όλες
      const strip = (arr: MediaItemBase[]) => arr.filter((x) => x.id !== id);
      let { watching, completed, onHold, dropped, favorites, hated } = lists;
      watching = strip(watching);
      completed = strip(completed);
      onHold = strip(onHold);
      dropped = strip(dropped);

      const updated = { ...e.item, status };
      // βάλε στη νέα
      const push = (arr: MediaItemBase[]) => [...arr, updated];
      if (status === 'watching') watching = push(watching);
      if (status === 'completed') completed = push(completed);
      if (status === 'onHold') onHold = push(onHold);
      if (status === 'dropped') dropped = push(dropped);

      return { watching, completed, onHold, dropped, favorites, hated };
    });
  }

  onToggleFavorite(item: MediaItemBase) {
    this.userLists.update((lists) => {
      const exists = lists.favorites.some((x) => x.id === item.id);
      const favorites = exists
        ? lists.favorites.filter((x) => x.id !== item.id)
        : [...lists.favorites, { ...item, isFavorite: true }];
      return { ...lists, favorites };
    });
  }

  onToggleHated(item: MediaItemBase) {
    this.userLists.update((lists) => {
      const exists = lists.hated.some((x) => x.id === item.id);
      const hated = exists
        ? lists.hated.filter((x) => x.id !== item.id)
        : [...lists.hated, { ...item, isHated: true }];
      return { ...lists, hated };
    });
  }

  onRemove(item: MediaItemBase) {
    this.userLists.update((l) => {
      const rm = (a: MediaItemBase[]) => a.filter((x) => x.id !== item.id);
      return {
        ...l,
        watching: rm(l.watching),
        completed: rm(l.completed),
        onHold: rm(l.onHold),
        dropped: rm(l.dropped),
        favorites: rm(l.favorites),
        hated: rm(l.hated),
      };
    });
  }

  // helper για μικρά patches
  private patchItem(l: any, id: any, patch: Partial<MediaItemBase>) {
    const map = (a: MediaItemBase[]) =>
      a.map((x) => (x.id === id ? { ...x, ...patch } : x));
    return {
      ...l,
      watching: map(l.watching),
      completed: map(l.completed),
      onHold: map(l.onHold),
      dropped: map(l.dropped),
      favorites: map(l.favorites),
      hated: map(l.hated),
    };
  }
}
