import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyMobileComponent } from './privacy-mobile.component';

describe('PrivacyMobileComponent', () => {
  let component: PrivacyMobileComponent;
  let fixture: ComponentFixture<PrivacyMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyMobileComponent]
    });
    fixture = TestBed.createComponent(PrivacyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
