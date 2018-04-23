import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckProfileComponent } from './food-truck-profile.component';

describe('FoodTruckProfileComponent', () => {
  let component: FoodTruckProfileComponent;
  let fixture: ComponentFixture<FoodTruckProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTruckProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTruckProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
