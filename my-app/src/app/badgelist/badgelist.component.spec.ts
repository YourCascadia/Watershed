import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgelistComponent } from './badgelist.component';

describe('BadgelistComponent', () => {
  let component: BadgelistComponent;
  let fixture: ComponentFixture<BadgelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
