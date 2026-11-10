export const COMPANY_SIZE_OPTIONS = ["1 - 50", "51 - 250", "251 - 1000", "1001+"] as const;
export type CompanySize = (typeof COMPANY_SIZE_OPTIONS)[number];

export type LabsContactPayload = {
  name: string;
  work_email: string;
  company: string;
  company_size: string;
  message: string;
};
