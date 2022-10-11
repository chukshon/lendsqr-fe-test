import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dasboard"
import UserDetails from "./pages/dashboard/userDetails/UserDetails"
import Users from "./pages/dashboard/users/Users"
import Login from "./pages/login/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Dashboard />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="/users" element={<Users />} />
          <Route path="user-details/:id" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<h2>Does not exist</h2>} />
      </Routes>
    </Router>
  )
}

export default App
