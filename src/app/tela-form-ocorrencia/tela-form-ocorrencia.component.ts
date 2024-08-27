import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Ocorrencia} from "../../models/ocorrencia";
import {AppService} from "../app.service";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ElementRef, ViewChild} from "@angular/core";
import {jsPDF} from 'jspdf';




@Component({
  selector: 'app-tela-form-ocorrencia',
  templateUrl: './tela-form-ocorrencia.component.html',
  styleUrls: ['./tela-form-ocorrencia.component.css']
})
export class TelaFormOcorrenciaComponent implements OnInit {

  ocorrencias: Ocorrencia[] = [];
  formData: any;
  selectedFile: File;
  ocorrencia: Ocorrencia = new Ocorrencia()

  @ViewChild('content', {static: false})
  el!: ElementRef;
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

  constructor(private service: AppService, private storage: AngularFireStorage) {
  }


  ngOnInit(): void {
  }

  teste(ocorrencia: Ocorrencia) {
    console.log(this.ocorrencia)
  }

  postApi(ocorrencia: Ocorrencia) {
    this.service.post(ocorrencia).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  onFileChange(event: any) {
    console.log(event)
    const selectedFile = <FileList>event.srcElement.files;
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
          this.ocorrencia.image = url;
        });
      })
    ).subscribe();
  }



  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Ocorrencia.pdf");
      }
    });
  }

}
