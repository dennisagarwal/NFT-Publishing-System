import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftByUserIdComponent } from './nft-by-user-id.component';

describe('NftByUserIdComponent', () => {
  let component: NftByUserIdComponent;
  let fixture: ComponentFixture<NftByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftByUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
