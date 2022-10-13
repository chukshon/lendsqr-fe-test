export type MenuT = {
  open: boolean
  handleClose: (se: React.SyntheticEvent) => void
  handleOpen: (se: React.SyntheticEvent) => void
}

export type SubmenuProps = {
  title: string
  link: string
  icon: any
}
export type MenuProps = {
  title: string
  subMenu: SubmenuProps[]
}

export type Profile = {
  firstName: string
  lastName: string
  phoneNumber: string
  avatar: string
  gender: string
  bvn: string
  address: string
  currency: string
}
export type Guarantor = {
  firstName: string
  lastName: string
  phoneNumber: string
  gender: string
  address: string
}

export type Education = {
  level: string
  employmentStatus: string
  sector: string
  duration: string
  officeEmail: string
  monthlyIncome: string[]
  loanRepayment: string
}

export type UserDataT = {
  createdAt: string
  orgName: string
  userName: string
  email: string
  phoneNumber: string
  lastActiveDate: string
  profile: Profile
  guarantor: Guarantor
  accountBalance: string
  accountNumber: string
  socials: {
    facebook: string
    instagram: string
    twitter: string
  }
  education: Education
  id: string
}

export type TableDataT = {
  id: string
  Organization: string
  Username: string
  Email: string
  "Phone Number": string
  "Date Joined": string
  Status: JSX.Element
}

export type PersonalInfoT = {
  "Full Name": string
  "Phone Number": string
  "Email Address": string
  Bvn: string
  Gender: string
  "Marital Status": string
  Children: string
  "Type of Residence": string
}

export type Education_employmentT = {
  "Level of Education": string
  "Employment Status": string
  "Sector of Employment": string
  "Duration of Employment": string
  "Office Email": string
  "Monthly Income": string
  "Loan Repayment": string
}

export type SocialsT = {
  Twitter: string
  Facebook: string
  Instagram: string
}

export type GuarantorT = {
  "Full Name": string
  "Phone Number": string
  "Email Address": string
  Relationship: string
}
