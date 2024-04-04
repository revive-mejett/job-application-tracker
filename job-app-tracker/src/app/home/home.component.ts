import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplication } from '../common/types/jobApplication';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  jobApplications : JobApplication[] = []

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
}
