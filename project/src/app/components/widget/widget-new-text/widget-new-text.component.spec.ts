import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNewTextComponent } from './widget-new-text.component';

describe('WidgetNewTextComponent', () => {
  let component: WidgetNewTextComponent;
  let fixture: ComponentFixture<WidgetNewTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNewTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
