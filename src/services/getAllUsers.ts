import axios from "axios"
const users = localStorage.getItem("users")
export const getAllUsersService = async () => {
  if (!users) {
    const response = await axios.get(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
    )
    console.log(response.data)
    !users && localStorage.setItem("users", JSON.stringify(response.data))
    return response.data
  }
  return JSON.parse(users)
}
