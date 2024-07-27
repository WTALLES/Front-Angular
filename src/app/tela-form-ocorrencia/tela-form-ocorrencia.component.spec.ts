import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFormOcorrenciaComponent } from './tela-form-ocorrencia.component';

describe('TelaFormOcorrenciaComponent', () => {
  let component: TelaFormOcorrenciaComponent;
  let fixture: ComponentFixture<TelaFormOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaFormOcorrenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFormOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
