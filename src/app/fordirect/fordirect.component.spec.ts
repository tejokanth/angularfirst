import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordirectComponent } from './fordirect.component';

describe('FordirectComponent', () => {
  let component: FordirectComponent;
  let fixture: ComponentFixture<FordirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
