import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStustentsComponent } from './add-stustents.component';

describe('AddStustentsComponent', () => {
  let component: AddStustentsComponent;
  let fixture: ComponentFixture<AddStustentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStustentsComponent]
    });
    fixture = TestBed.createComponent(AddStustentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
