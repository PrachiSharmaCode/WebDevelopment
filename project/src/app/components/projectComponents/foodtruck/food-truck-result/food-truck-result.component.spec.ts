import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckResultComponent } from './food-truck-result.component';

describe('FoodTruckResultComponent', () => {
  let component: FoodTruckResultComponent;
  let fixture: ComponentFixture<FoodTruckResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTruckResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTruckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
