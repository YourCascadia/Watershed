import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareUserComponent } from './compare-user.component';

describe('CompareUserComponent', () => {
  let component: CompareUserComponent;
  let fixture: ComponentFixture<CompareUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
