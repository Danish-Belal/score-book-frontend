import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Signup from "@/components/auth/Signup"
import Login from "@/components/auth/Login"
import ProfileForm from "@/components/profiles/ProfileForm"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfileForm />} />

        {/* Add other routes later like login, profile etc. */}
      </Routes>
    </Router>
  )
}
