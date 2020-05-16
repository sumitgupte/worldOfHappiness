import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishVideoComponent } from './wish-video.component';

describe('WishVideoComponent', () => {
  let component: WishVideoComponent;
  let fixture: ComponentFixture<WishVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
