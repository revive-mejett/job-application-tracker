import { Component } from '@angular/core';
import { ApplicationStatus, JobApplication } from '../common/types/jobApplication';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-jobapplication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobapplication.component.html',
  styleUrl: './jobapplication.component.scss'
})
export class JobapplicationComponent {


  @Input() jobapp!: JobApplication
  isEditing = false

  onClick() {
    this.isEditing = true
  }

  updateItem(newStatus: string, noteInput: string) {
    this.jobapp.status = newStatus as ApplicationStatus
    this.isEditing = false
    this.jobapp.updatedOn = new Date(2022, 0, 16)
    this.jobapp.notes.push(noteInput)
  }

  cancelUpdate() {
    this.isEditing = false
  }

  generateRejectionLetter() {
    const fontSize = 24
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    //document
    const wordDoc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: this.jobapp.updatedOn.toLocaleDateString("fr-fr", options),
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "Cher/Chère Candidat,",
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: `Nous vous remercions pour l'intérêt que vous avez manifesté pour le poste de ${this.jobapp.position} au sein de ${this.jobapp.company}. Après avoir examiné attentivement votre candidature, nous regrettons de devoir vous informer que celle-ci n'a pas été retenue pour passer à l'étape suivante du processus de sélection.`,
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: `Nous vous souhaitons beaucoup de succès dans vos recherches futures et vous remercions encore une fois pour l'intérêt que vous avez porté à ${this.jobapp.company}.`,
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "Cordialement,",
                size: fontSize,
              }),
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `${this.jobapp.company}`,
                size: fontSize,
              }),
            ]
          }),
        ]
      }]
    })

    this.exportDocToFile(wordDoc, "rejection.docx")
  }

  exportDocToFile(wordDoc: Document, fileName: string) {
    const packer = new Packer()
    const mimeType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    Packer.toBlob(wordDoc).then(blob => {
      console.log(blob)
      const docBlob = blob.slice(0, blob.size, mimeType)
      saveAs(docBlob, fileName)
    })
  }

}

