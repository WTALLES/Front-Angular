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

@Component({
  selector: 'app-tela-form-ocorrencia',
  templateUrl: './tela-form-ocorrencia.component.html',
  styleUrls: ['./tela-form-ocorrencia.component.css']
})
export class TelaFormOcorrenciaComponent implements OnInit {
  dialog = inject(MatDialog);
   ocultar= false;
  openDialog() {
    this.dialog.open(ModelComponent, {
    });
  }
  ocorrencias: Ocorrencia[] = [];
  formData: any;
  selectedFile: File;
  ocorrencia: Ocorrencia = new Ocorrencia();


  constructor(private service: AppService, private storage: AngularFireStorage,private fb: FormBuilder) {
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
  this.validForms()
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

  // dowload em pdf do cadastro
  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Ocorrencia.pdf");
      }
    });
  }

  onSubmit(): void {
    this.openDialog()
   // if (this.ocorrenciaForm.valid) {

     // this.ocorrenciaForm.reset();
    //}
    //else{
      //alert("Todos os campos precisam ser preenchidos")
    //}
  }
  postApi() {
    this.service.post(this.ocorrenciaForm.value).subscribe(
      response => {

      },
      error => {
        console.log(error)
      }
    )
  }
  receberevento(mensagem: string){
    console.log("recebido", mensagem)
  }
}
