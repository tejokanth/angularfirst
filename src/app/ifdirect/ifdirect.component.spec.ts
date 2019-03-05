import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirectComponent } from './ifdirect.component';

describe('IfdirectComponent', () => {
  let component: IfdirectComponent;
  let fixture: ComponentFixture<IfdirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfdirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfdirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
