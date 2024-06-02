import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStustentsComponent } from './detail-stustents.component';

describe('DetailStustentsComponent', () => {
  let component: DetailStustentsComponent;
  let fixture: ComponentFixture<DetailStustentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailStustentsComponent]
    });
    fixture = TestBed.createComponent(DetailStustentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
