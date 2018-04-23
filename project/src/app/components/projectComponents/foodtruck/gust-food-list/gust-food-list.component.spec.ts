import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GustFoodListComponent } from './gust-food-list.component';

describe('GustFoodListComponent', () => {
  let component: GustFoodListComponent;
  let fixture: ComponentFixture<GustFoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GustFoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GustFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
