import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RejectiongeneratorService {


  emailMessages = [{}]

  

  setEmailMessages(candidate : string, company : string, position: string) {
    this.emailMessages = [{
      language : "fr-fr",
      heading : `Cher/Chère ${candidate},`,
      firstParagraph : `Nous vous remercions pour l'intérêt que vous avez manifesté pour le poste de ${position} au sein de ${company}. Après avoir examiné attentivement votre candidature, nous regrettons de devoir vous informer que celle-ci n'a pas été retenue pour passer à l'étape suivante du processus de sélection.`,
      secondParagraph : `Nous vous souhaitons beaucoup de succès dans vos recherches futures et vous remercions encore une fois pour l'intérêt que vous avez porté à ${company}.`,
      closing : `Cordialement,`
    },
    {
      language : "en-us",
      heading : `Hello ${candidate},`,
      firstParagraph : `Thank you for your interest in the ${position} role at ${company}. We appreciate the time you took to apply and the effort you put into your application. After careful consideration, we have decided to move forward with other candidates who more closely match the requirements for this position.`,
      secondParagraph : `We encourage you to apply for future openings that match your skills and experience. We wish you the best in your job search and future professional endeavors.`,
      closing : `Sweet regards,`
    },
    {
      language : "en-us",
      heading : `Hello ${candidate},`,
      firstParagraph : `Thank you for applying for the ${position} position at ${company}. We were impressed by your qualifications and experience. After a thorough review of your application, we have chosen to proceed with candidates whose skills and experience more closely align with our current needs. This decision was not easy, as we received many strong applications.`,
      secondParagraph : `We appreciate your interest in our company and encourage you to keep an eye on our job postings. We often have new opportunities that might be a better fit for your profile. We wish you all the best in your job search and future career. (Reality: We don't like you)`,
      closing : `Sincerely,`
    }
  ]
  }


  

  


  getGeneratedEmailMessage() {
    return this.emailMessages[Math.floor(Math.random() * this.emailMessages.length)]
  }
}
