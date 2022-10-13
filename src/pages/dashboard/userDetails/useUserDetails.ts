import { useParams } from "react-router-dom"
import useGetAllUsers from "../../../hooks/useGetAllUsers"
import { UserDataT } from "../../../types/index"
import {
  Education_employmentT,
  PersonalInfoT,
  SocialsT,
  GuarantorT,
} from "../../../types"

function useUserDetails() {
  const { id } = useParams()
  const { allUsers } = useGetAllUsers()
  const singleUser = allUsers.find((user: UserDataT) => {
    return user.id === id
  })

  const personalInfo: PersonalInfoT = {
    "Full Name":
      singleUser.profile.firstName + " " + singleUser.profile.lastName,
    "Phone Number": singleUser.phoneNumber,
    "Email Address": singleUser.email,
    Bvn: singleUser.profile.bvn,
    Gender: singleUser.profile.gender,
    "Marital Status": "single",
    Children: "None",
    "Type of Residence": "Parent’s Apartment",
  }

  const education_employment: Education_employmentT = {
    "Level of Education": singleUser.education.level,
    "Employment Status": singleUser.education.employmentStatus,
    "Sector of Employment": singleUser.education.sector,
    "Duration of Employment": singleUser.education.duration,
    "Office Email": singleUser.education.officeEmail,
    "Monthly Income": "₦200,000.00- ₦400,000.00",
    "Loan Repayment": "40,000",
  }

  const socials: SocialsT = {
    Twitter: singleUser.socials.twitter,
    Facebook: singleUser.socials.facebook,
    Instagram: singleUser.socials.instagram,
  }

  const guarantor: GuarantorT = {
    "Full Name":
      singleUser.profile.firstName + " " + singleUser.profile.lastName,
    "Phone Number": singleUser.phoneNumber,
    "Email Address": singleUser.email,
    Relationship: "Sister",
  }
  return {
    allUsers,
    personalInfo,
    education_employment,
    socials,
    guarantor,
    singleUser,
  }
}

export default useUserDetails
