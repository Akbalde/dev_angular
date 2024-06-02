import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StustentsListComponent } from './stustents-list.component';

describe('StustentsListComponent', () => {
  let component: StustentsListComponent;
  let fixture: ComponentFixture<StustentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StustentsListComponent]
    });
    fixture = TestBed.createComponent(StustentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
