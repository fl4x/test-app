import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact4Component } from './contact4.component';

describe('Contact4Component', () => {
  let component: Contact4Component;
  let fixture: ComponentFixture<Contact4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
