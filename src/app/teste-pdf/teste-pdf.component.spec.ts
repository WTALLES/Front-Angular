import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestePdfComponent } from './teste-pdf.component';

describe('TestePdfComponent', () => {
  let component: TestePdfComponent;
  let fixture: ComponentFixture<TestePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestePdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
