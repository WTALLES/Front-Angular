import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaSenhaComponent } from './recupera-senha.component';

describe('RecuperaSenhaComponent', () => {
  let component: RecuperaSenhaComponent;
  let fixture: ComponentFixture<RecuperaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperaSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
