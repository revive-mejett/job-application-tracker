export interface JobApplication {
    company: string,
    position: string,
    location: string,
    employmentType: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship"
    commute: "On-site" | "Remote" | "Hybrid",
    stage: string[],
    status: "Not Applied" | "Applied" | "Interviewing" | "Offer Received" | "Accepted Offer" | "Widthdrawn" | "Rejected"
    dateApplied: Date, // i dont like dates,
    updatedOn: Date
}