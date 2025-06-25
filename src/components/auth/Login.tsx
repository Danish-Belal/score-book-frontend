import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { loginUser } from "@/api"

export default function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const res = await loginUser(form)
      localStorage.setItem("token", res.data.token)
      navigate("/profile")
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-neutral-800">Login to Score-Book</h2>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" onChange={handleChange} placeholder="you@example.com" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" onChange={handleChange} placeholder="Your password" />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button className="w-full mt-2" onClick={handleSubmit}>
          Login
        </Button>
        <p className="text-sm text-center">
          Don’t have an account? <a href="/signup" className="text-blue-600 underline">Signup</a>
        </p>
      </div>
    </div>
  )
}
