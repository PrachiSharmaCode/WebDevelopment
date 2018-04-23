import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFoodTruckComponent } from './review-food-truck.component';

describe('ReviewFoodTruckComponent', () => {
  let component: ReviewFoodTruckComponent;
  let fixture: ComponentFixture<ReviewFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
