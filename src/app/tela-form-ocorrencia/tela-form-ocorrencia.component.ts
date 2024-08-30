import {Component, inject, input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Ocorrencia} from "../../models/ocorrencia";
import {AppService} from "../app.service";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ElementRef, ViewChild} from "@angular/core";
import {jsPDF} from 'jspdf';
import {ModelComponent} from "../model/model.component";
import {MenuLateralService} from "../menu-lateral.service";

@Component({
  selector: 'app-tela-form-ocorrencia',
  templateUrl: './tela-form-ocorrencia.component.html',
  styleUrls: ['./tela-form-ocorrencia.component.css']
})
export class TelaFormOcorrenciaComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  ocultar: boolean = false
  mensagem: boolean = false;
  selectedFile: File;
  ocorrencia: Ocorrencia = new Ocorrencia();


  constructor(private service: AppService, private storage: AngularFireStorage,private fb: FormBuilder, private menuLateralSerivce: MenuLateralService) {
  }


  @ViewChild('content', {static: false})
  el!: ElementRef;
  ocorrenciaForm: FormGroup;
  tiposOcorrencia= [
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


  ngOnInit(): void {
  this.validForms();
    this.menuLateralSerivce.sidebarVisibility$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    });
  }

 //validação Formulario
  validForms(){

    this.ocorrenciaForm = this.fb.group({
      fk_produto: ['', Validators.required],
      n_maquina: ['', Validators.required],
      tpOcorrencia: ['', Validators.required],
      cliente: ['', Validators.required],
      ugb: ['', Validators.required],
      responsavel: ['', Validators.required],
      operador: ['', Validators.required],
      tamanhoLote: ['', Validators.required],
      turno: ['', Validators.required],
      status: ['', Validators.required],
      image: [null],  // Para o arquivo
      observacoes: ['']
    });
  }
  //upload imagens cloud storage


  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

    task.snapshotChanges().pipe(
      finalize(() => {
        ref.getDownloadURL().subscribe(url => {
          this.ocorrenciaForm.get('image')?.setValue(url);
        });
      })
    ).subscribe();
  }



  onSubmit(): void {
   if (this.ocorrenciaForm.valid) {
     this.openDialog()
    }
    else{
      this.styleNegativo()
    }
  }
  styleNegativo(){
    this.mensagem = true
  }
  postApi() {
    this.service.post(this.ocorrenciaForm.value).subscribe(
      response => {
        console.log("realizada com sucesso")
      },
      error => {
        console.log(error)
      }
    )
  }
  //module confirmar pdf
  openDialog() {
    const dialogRef = this.dialog.open(ModelComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.postApi()
        this.printPDF()
      }
      this.ocorrenciaForm.reset()
      console.log(`Dialog result: ${result}`);
    });
  }
  // dowload em pdf do cadastro
  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Ocorrencia.pdf");
      }
    });
  }
  //respansividade em relação ao menu
  isSidebarVisible = true;
}
