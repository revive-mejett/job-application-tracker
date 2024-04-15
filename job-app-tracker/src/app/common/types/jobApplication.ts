export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship"
export type CommuteType = "On-site" | "Remote" | "Hybrid"
export type ApplicationStatus = "Not Applied" | "Applied" | "Interviewing" | "Offer Received" | "Accepted Offer" | "Widthdrawn" | "Rejected"


export interface JobApplication {
    company: string,
    position: string,
    location: string,
    employmentType: EmploymentType,
    commute: CommuteType,
    stage: string[],
    status: ApplicationStatus
    dateApplied: Date | undefined, // i dont like dates,
    updatedOn: Date
}