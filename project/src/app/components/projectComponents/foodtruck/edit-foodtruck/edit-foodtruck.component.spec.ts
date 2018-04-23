import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodtruckComponent } from './edit-foodtruck.component';

describe('EditFoodtruckComponent', () => {
  let component: EditFoodtruckComponent;
  let fixture: ComponentFixture<EditFoodtruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodtruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
