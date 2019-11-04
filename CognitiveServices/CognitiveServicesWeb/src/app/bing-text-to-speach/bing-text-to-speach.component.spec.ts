import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingTextToSpeachComponent } from './bing-text-to-speach.component';

describe('BingTextToSpeachComponent', () => {
  let component: BingTextToSpeachComponent;
  let fixture: ComponentFixture<BingTextToSpeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingTextToSpeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingTextToSpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
