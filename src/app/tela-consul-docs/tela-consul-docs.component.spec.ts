import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConsulDocsComponent } from './tela-consul-docs.component';

describe('TelaConsulDocsComponent', () => {
  let component: TelaConsulDocsComponent;
  let fixture: ComponentFixture<TelaConsulDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaConsulDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaConsulDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
