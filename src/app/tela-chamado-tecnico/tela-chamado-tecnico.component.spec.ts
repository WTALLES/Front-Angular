import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaChamadoTecnicoComponent } from './tela-chamado-tecnico.component';

describe('TelaChamadoTecnicoComponent', () => {
  let component: TelaChamadoTecnicoComponent;
  let fixture: ComponentFixture<TelaChamadoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaChamadoTecnicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaChamadoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
