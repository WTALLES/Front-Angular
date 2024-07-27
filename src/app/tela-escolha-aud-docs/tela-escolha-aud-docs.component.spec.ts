import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEscolhaAudDocsComponent } from './tela-escolha-aud-docs.component';

describe('TelaEscolhaAudDocsComponent', () => {
  let component: TelaEscolhaAudDocsComponent;
  let fixture: ComponentFixture<TelaEscolhaAudDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaEscolhaAudDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEscolhaAudDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
