import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HasComponent } from './has.component';

describe('HasComponent', () => {
  let component: HasComponent;
  let fixture: ComponentFixture<HasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
