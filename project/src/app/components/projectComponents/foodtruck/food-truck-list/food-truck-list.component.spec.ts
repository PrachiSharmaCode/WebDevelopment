import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTruckListComponent } from './food-truck-list.component';

describe('FoodTruckListComponent', () => {
  let component: FoodTruckListComponent;
  let fixture: ComponentFixture<FoodTruckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTruckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTruckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
