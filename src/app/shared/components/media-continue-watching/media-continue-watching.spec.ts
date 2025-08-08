import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaContinueWatching } from './media-continue-watching';

describe('MediaContinueWatching', () => {
  let component: MediaContinueWatching;
  let fixture: ComponentFixture<MediaContinueWatching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaContinueWatching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaContinueWatching);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
