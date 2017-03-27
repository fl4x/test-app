import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksComponentComponent } from './clocks-component.component';

describe('ClocksComponentComponent', () => {
  let component: ClocksComponentComponent;
  let fixture: ComponentFixture<ClocksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClocksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
