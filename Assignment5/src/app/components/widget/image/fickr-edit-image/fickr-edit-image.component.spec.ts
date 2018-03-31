import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FickrEditImageComponent } from './fickr-edit-image.component';

describe('FickrEditImageComponent', () => {
  let component: FickrEditImageComponent;
  let fixture: ComponentFixture<FickrEditImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FickrEditImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FickrEditImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
