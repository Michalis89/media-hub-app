import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUserStats } from './media-user-stats';

describe('MediaUserStats', () => {
  let component: MediaUserStats;
  let fixture: ComponentFixture<MediaUserStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaUserStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaUserStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
