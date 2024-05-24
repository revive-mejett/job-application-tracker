import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RejectiongeneratorService {


  emailMessages = {}

  

  setEmailMessages(candidate : string, company : string, position: string) {
    this.emailMessages = {
      heading : `Cher/Chère ${candidate},`,
      firstParagraph : `Nous vous remercions pour l'intérêt que vous avez manifesté pour le poste de ${position} au sein de ${company}. Après avoir examiné attentivement votre candidature, nous regrettons de devoir vous informer que celle-ci n'a pas été retenue pour passer à l'étape suivante du processus de sélection.`,
      secondParagraph : `Nous vous souhaitons beaucoup de succès dans vos recherches futures et vous remercions encore une fois pour l'intérêt que vous avez porté à ${company}.`,
      closing : `Cordialement,`
    }
  }

  getEmailMessages() {
    return this.emailMessages
  }
}
