import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RejectiongeneratorService {

  candidate
  emailMessages = {}
  constructor(candidate, company) {
    this.emailMessages = {
      heading : "Dear"
    }
  }
}
