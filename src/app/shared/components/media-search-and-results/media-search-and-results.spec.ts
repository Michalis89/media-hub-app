import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSearchAndResults } from './media-search-and-results';

describe('MediaSearchAndResults', () => {
  let component: MediaSearchAndResults;
  let fixture: ComponentFixture<MediaSearchAndResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaSearchAndResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaSearchAndResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
