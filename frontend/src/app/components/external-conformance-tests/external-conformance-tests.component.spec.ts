import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalConformanceTestsComponent } from './external-conformance-tests.component';

describe('ExternalConformanceTestsComponent', () => {
  let component: ExternalConformanceTestsComponent;
  let fixture: ComponentFixture<ExternalConformanceTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalConformanceTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalConformanceTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
