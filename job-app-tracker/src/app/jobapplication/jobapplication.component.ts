import { Component } from '@angular/core';
import { JobApplication } from '../common/types/jobApplication';
import { Input } from '@angular/core';

@Component({
  selector: 'app-jobapplication',
  standalone: true,
  imports: [],
  templateUrl: './jobapplication.component.html',
  styleUrl: './jobapplication.component.scss'
})
export class JobapplicationComponent {


  @Input() jobapp!: JobApplication
}
