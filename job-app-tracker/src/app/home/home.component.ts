import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationStatus, CommuteType, EmploymentType, JobApplication } from '../common/types/jobApplication';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  jobApplications: JobApplication[] = []

  applyForm = new FormGroup({
    company: new FormControl(),
    position: new FormControl(),
    location: new FormControl(),
    employmentType: new FormControl("Full-time"),
    commute: new FormControl("On-site"),
    stage: new FormControl(["1"]),
    status: new FormControl("Not Applied"),
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

  addItem(company: string, position: string, location: string, employmentType: EmploymentType, commute: CommuteType, stage: string[], status : ApplicationStatus) {
    console.log("called");
    
    this.jobApplications.unshift({
      company: company,
      position: position,
      location: location,
      employmentType: employmentType,
      commute: commute,
      stage: stage,
      status: "Not Applied",
      dateApplied: new Date(),
      updatedOn: new Date(),
    })
  }

  onSubmit() {
    const formValues = this.applyForm.value
    this.addItem(
      formValues.company?.trim() ?? "[Unnamed Company]",
      formValues.position?.trim() ?? "[Unnamed Position]",
      formValues.location?.trim() ?? "[No location provided]",
      formValues.employmentType?.trim() as EmploymentType ?? "Full-time",
      formValues.commute?.trim() as CommuteType ?? "Full-time",
      formValues.stage!,
      formValues.status?.trim() as ApplicationStatus ?? "Full-time"
    )
  }
}
