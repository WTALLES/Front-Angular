import {Component, OnInit} from '@angular/core';
import {jsPDF} from 'jspdf';
import {ElementRef, ViewChild} from "@angular/core";

@Component({
  selector: 'app-teste-pdf',
  templateUrl: './teste-pdf.component.html',
  styleUrl: './teste-pdf.component.css'
})
export class TestePdfComponent implements OnInit{
  @ViewChild('content', {static: false}) el!: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  printTest(){
    const doc = new jsPDF();
    doc.text("Teste pdf",10,10);
    doc.save("a4.pdf");
  }

  printPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) =>{
        pdf.save("Ocorrencia.pdf");
      }
    })
  }

}
