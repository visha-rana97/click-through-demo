import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlValidationComponent } from './xml-validation.component';

describe('XmlValidationComponent', () => {
  let component: XmlValidationComponent;
  let fixture: ComponentFixture<XmlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
