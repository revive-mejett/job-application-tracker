import { Component, inject } from '@angular/core';
import { ApplicationStatus, JobApplication } from '../common/types/jobApplication';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from "file-saver";
import { RejectiongeneratorService } from '../rejectiongenerator.service';
import { RejectionMessage } from '../common/types/RejectionMessage';

@Component({
  selector: 'app-jobapplication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobapplication.component.html',
  styleUrl: './jobapplication.component.scss',
  providers: [ RejectiongeneratorService ]
})
export class JobapplicationComponent {


  @Input() jobapp!: JobApplication
  isEditing = false

  rejectionGeneratorService = inject(RejectiongeneratorService)

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

    
    this.rejectionGeneratorService.setEmailMessages("Sova", this.jobapp.company, this.jobapp.position)
    const emailMessages : RejectionMessage = this.rejectionGeneratorService.getGeneratedEmailMessage() as RejectionMessage

    //word document
    const wordDoc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: this.jobapp.updatedOn.toLocaleDateString(emailMessages.language, options),
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
                text: emailMessages.heading,
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: emailMessages.firstParagraph,
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: emailMessages.secondParagraph,
                size: fontSize,
              }),
            ]
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: emailMessages.closing,
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

