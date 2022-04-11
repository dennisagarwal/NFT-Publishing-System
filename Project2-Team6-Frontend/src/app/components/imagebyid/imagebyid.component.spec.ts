import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagebyidComponent } from './imagebyid.component';

describe('ImagebyidComponent', () => {
  let component: ImagebyidComponent;
  let fixture: ComponentFixture<ImagebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
