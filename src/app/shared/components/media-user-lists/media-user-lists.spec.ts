import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUserLists } from './media-user-lists';

describe('MediaUserLists', () => {
  let component: MediaUserLists;
  let fixture: ComponentFixture<MediaUserLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaUserLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaUserLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
