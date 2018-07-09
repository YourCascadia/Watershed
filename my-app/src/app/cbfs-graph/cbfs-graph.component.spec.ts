import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbfsGraphComponent } from './cbfs-graph.component';

describe('CbfsGraphComponent', () => {
  let component: CbfsGraphComponent;
  let fixture: ComponentFixture<CbfsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbfsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbfsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
