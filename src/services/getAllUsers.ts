import axios from "axios"
export const getAllUsersService = async () => {
  const response = await axios.get(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
  )
  return response.data
}
