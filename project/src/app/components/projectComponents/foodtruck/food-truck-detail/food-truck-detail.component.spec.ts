import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckDetailComponent } from './food-truck-detail.component';

describe('FoodTruckDetailComponent', () => {
  let component: FoodTruckDetailComponent;
  let fixture: ComponentFixture<FoodTruckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTruckDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTruckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
