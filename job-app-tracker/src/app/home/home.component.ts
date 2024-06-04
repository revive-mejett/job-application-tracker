import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationStatus, CommuteType, EmploymentType, JobApplication } from '../common/types/jobApplication';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobapplicationComponent } from '../jobapplication/jobapplication.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, JobapplicationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles.scss']
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
    let jobApplicationString : string | null = localStorage.getItem("jobApps") ?? ""
    this.jobApplications = jobApplicationString !== "" ? JSON.parse(jobApplicationString) : []
    this.jobApplications.map(app => {
      app.dateApplied = new Date(app.dateApplied!)
      app.updatedOn = new Date(app.updatedOn!)
    })
  }

  addItem(company: string, position: string, location: string, employmentType: EmploymentType, commute: CommuteType, notes: string[], status : ApplicationStatus) {
 
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
      formValues.company?.trim() !== "" ? formValues.company?.trim() : "[Unnamed Company]",
      formValues.position?.trim() !== "" ? formValues.position?.trim() : "[Unnamed Position]",
      formValues.location?.trim() !== "" ? formValues.location?.trim() : "[No location provided]",
      formValues.employmentType?.trim() as EmploymentType ?? "Full-time",
      formValues.commute?.trim() as CommuteType ?? "On-site",
      formValues.notes!.trim() !== "" ? [formValues.notes!.trim()] : ["N/A"],
      formValues.status?.trim() as ApplicationStatus ?? "Not Applied"
    )
  }
  
  //save the list
  saveItems() {
    localStorage.setItem("jobApps", JSON.stringify(this.jobApplications))
  }

  //clear all items
  clearItems() {
    localStorage.removeItem("jobApps")
  }
}
