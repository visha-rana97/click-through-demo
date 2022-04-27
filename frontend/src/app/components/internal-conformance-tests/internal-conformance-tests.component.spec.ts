import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalConformanceTestsComponent } from './internal-conformance-tests.component';

describe('InternalConformanceTestsComponent', () => {
  let component: InternalConformanceTestsComponent;
  let fixture: ComponentFixture<InternalConformanceTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalConformanceTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalConformanceTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
