import { Component } from '@angular/core';
import { ApplicationStatus, JobApplication } from '../common/types/jobApplication';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  updateItem(newStatus : string, noteInput : string) {
    this.jobapp.status = newStatus as ApplicationStatus
    this.isEditing = false
    this.jobapp.updatedOn = new Date(2022,0,16)
    this.jobapp.notes.push(noteInput)
    console.log(this.jobapp.notes)
  }

  cancelUpdate() {
    this.isEditing = false
  }
}
