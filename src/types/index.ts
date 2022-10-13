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
