import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFoodTruckComponent } from './new-food-truck.component';

describe('NewFoodTruckComponent', () => {
  let component: NewFoodTruckComponent;
  let fixture: ComponentFixture<NewFoodTruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFoodTruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFoodTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
