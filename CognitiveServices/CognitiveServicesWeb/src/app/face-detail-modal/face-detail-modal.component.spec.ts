import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDetailModalComponent } from './face-detail-modal.component';

describe('FaceDetailModalComponent', () => {
  let component: FaceDetailModalComponent;
  let fixture: ComponentFixture<FaceDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
