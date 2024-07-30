import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Produto {
  nome: string;
  cliente: string;
}

@Component({
  selector: 'app-tela-form-ocorrencia',
  templateUrl: './tela-form-ocorrencia.component.html',
  styleUrls: ['./tela-form-ocorrencia.component.css']
})
export class TelaFormOcorrenciaComponent implements OnInit {
  ocorrenciaForm: FormGroup;
  tiposOcorrencia = [
    'Falha de Injeção', 
    'Rebarba', 
    'Furo Obstruido',
    'Contaminação',
    'Dimencional Fora do Especificado',
    'Embalagem fora do Padrão'
  ];
  turnos = ['1°', '2°', '3°', 'Comercial'];
  statusProdutos = ['100% bloqueado', 'Em Análise', 'Scrap'];
  ugbOptions = ['UGB1', 'UGB2', 'UGB3'];
  produto: Produto | null = null;

  constructor(private fb: FormBuilder) {
    this.ocorrenciaForm = this.fb.group({
      codigoProduto: ['', Validators.required],
      numeroMaquina: ['', Validators.required],
      tipoOcorrencia: ['', Validators.required],
      cliente: ['', Validators.required],
      ugb: ['', Validators.required],
      responsavel: ['', Validators.required],
      operador: ['', Validators.required],
      tamanhoLote: ['', Validators.required],
      turno: ['', Validators.required],
      statusProduto: ['', Validators.required],
      arquivo: [null, Validators.required],
      observacoes: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.ocorrenciaForm.valid) {
      console.log(this.ocorrenciaForm.value);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.ocorrenciaForm.patchValue({
      arquivo: file
    });
  }

  onCodigoProdutoBlur(): void {
    const codigoProduto = this.ocorrenciaForm.get('codigoProduto')?.value;
    if (codigoProduto) {
      this.fetchProdutoDetails(codigoProduto).then(produto => {
        this.produto = produto;
        this.ocorrenciaForm.patchValue({
          cliente: produto ? produto.cliente : ''
        });
      });
    }
  }

  fetchProdutoDetails(codigoProduto: string): Promise<Produto | null> {
    const produtosMock: { [key: string]: Produto } = {
      '123': { nome: 'Chassis Controle', cliente: 'SAMSUNG' },
      '321': { nome: 'Coroa Bomba de Combustivel', cliente: 'HONDA' }
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(produtosMock[codigoProduto] || null);
      }, 500);
    });
  }
}
