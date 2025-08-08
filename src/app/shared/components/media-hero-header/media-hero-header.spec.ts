import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaHeroHeader } from './media-hero-header';

describe('MediaHeroHeader', () => {
  let component: MediaHeroHeader;
  let fixture: ComponentFixture<MediaHeroHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaHeroHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaHeroHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
