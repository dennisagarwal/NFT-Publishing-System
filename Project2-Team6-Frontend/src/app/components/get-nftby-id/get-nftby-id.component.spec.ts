import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNFTByIdComponent } from './get-nftby-id.component';

describe('GetNFTByIdComponent', () => {
  let component: GetNFTByIdComponent;
  let fixture: ComponentFixture<GetNFTByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNFTByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNFTByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
