import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsMobileComponent } from './terms-mobile.component';

describe('TermsMobileComponent', () => {
  let component: TermsMobileComponent;
  let fixture: ComponentFixture<TermsMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsMobileComponent]
    });
    fixture = TestBed.createComponent(TermsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
