import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNftComponent } from './post-nft.component';

describe('PostNftComponent', () => {
  let component: PostNftComponent;
  let fixture: ComponentFixture<PostNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
