import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaWatchingList } from './media-watching-list';

describe('MediaWatchingList', () => {
  let component: MediaWatchingList;
  let fixture: ComponentFixture<MediaWatchingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaWatchingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaWatchingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
