import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMainViewComponent } from './desktop-main-view.component';

describe('DesktopMainViewComponent', () => {
  let component: DesktopMainViewComponent;
  let fixture: ComponentFixture<DesktopMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
