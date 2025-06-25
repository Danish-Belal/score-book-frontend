import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { signupUser } from "@/api"

export default function Signup() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const res = await signupUser(form)
      localStorage.setItem("token", res.data.token)
      navigate("/profile")
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-neutral-800">Create your Score-Book Account</h2>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input name="name" onChange={handleChange} placeholder="Your full name" />
        </div>

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
          Sign Up
        </Button>
        <p className="text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
        </p>
      </div>
    </div>
  )
}
