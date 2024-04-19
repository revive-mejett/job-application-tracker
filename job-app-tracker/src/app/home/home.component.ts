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
    status: new FormControl("Not Applied"),
    notes: new FormControl(""),
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
        notes: ["Sample note 1", "Sample note 2, its a remote position"],
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
        notes: ["Test note 1", "Ghosted test note"],
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
        notes: ["this is a fake posting, test data"],
        status: "Not Applied",
        dateApplied: new Date(),
        updatedOn: new Date(),
      }
    ]
  }

  addItem(company: string, position: string, location: string, employmentType: EmploymentType, commute: CommuteType, notes: string[], status : ApplicationStatus) {
    console.log("called");
    
    this.jobApplications.unshift({
      company: company,
      position: position,
      location: location,
      employmentType: employmentType,
      commute: commute,
      notes: notes,
      status: status,
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
      formValues.commute?.trim() as CommuteType ?? "On-site",
      formValues.notes!.trim() !== "" ? [formValues.notes!.trim()] : ["N/A"],
      formValues.status?.trim() as ApplicationStatus ?? "Not Applied"
    )
  }
}
