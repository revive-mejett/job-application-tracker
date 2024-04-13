import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplication } from '../common/types/jobApplication';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  jobApplications : JobApplication[] = []

  applyForm = new FormGroup({
    company: new FormControl(),
    position: new FormControl(),
    location: new FormControl(),
    employmentType: new FormControl("Full-time"),
    commute: new FormControl("On-site"),
    stage: new FormControl("1"),
    status: new FormControl(),
  })


  /**
   * Set job applications field
   */
  constructor() {
    this.jobApplications = [
      {
        company: "Ubisoft",
        position: "Junior Dev",
        location: "Montreal",
        employmentType: "Full-time",
        commute: "On-site",
        stage: ["1", "2"],
        status: "Not Applied",
        dateApplied: new Date(),
        updatedOn: new Date(),
      },
      {
        company: "Ubisoft",
        position: "Junior Dev",
        location: "Montreal",
        employmentType: "Full-time",
        commute: "On-site",
        stage: ["1", "2"],
        status: "Not Applied",
        dateApplied: new Date(),
        updatedOn: new Date(),
      },
      {
        company: "Ubisoft",
        position: "Junior Dev",
        location: "Montreal",
        employmentType: "Full-time",
        commute: "On-site",
        stage: ["1", "2"],
        status: "Not Applied",
        dateApplied: new Date(),
        updatedOn: new Date(),
      }
    ]
  }

  addItem(company : string, position : string, location : string, employmentType : string, commute : string, stage : string) {
    console.log(company, position, location, employmentType, commute, stage)
  }

  onSubmit() {
    console.log(this.applyForm.value)
  }
}
