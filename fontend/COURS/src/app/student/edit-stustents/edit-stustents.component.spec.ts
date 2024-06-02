import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStustentsComponent } from './edit-stustents.component';

describe('EditStustentsComponent', () => {
  let component: EditStustentsComponent;
  let fixture: ComponentFixture<EditStustentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStustentsComponent]
    });
    fixture = TestBed.createComponent(EditStustentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
