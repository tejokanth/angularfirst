import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchdirectComponent } from './switchdirect.component';

describe('SwitchdirectComponent', () => {
  let component: SwitchdirectComponent;
  let fixture: ComponentFixture<SwitchdirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchdirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchdirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
