import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterComponent } from './barter.component';

describe('BarterComponent', () => {
  let component: BarterComponent;
  let fixture: ComponentFixture<BarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
