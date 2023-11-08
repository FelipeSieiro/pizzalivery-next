"use client"

import { useContext, useState } from "react"
import OrderContext from "../contexts/OrderContext"

export default function Login() {
  const navigate = navigate()
  const { pizzaOrder } = useContext(OrderContext)

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (event) => {
    setLogin(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const toLogin = (userPayload) => {
    try {
      fetch("http://localhost:8000/user/login", {
        method: "POST",
        body: JSON.stringify(userPayload),
      })
    } catch (error) {
      console.log(error)
    } finally {
      console.log("finnaly")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      user: login,
      pass: password,
    }

    toLogin(payload)

    sessionStorage.setItem("token", `${login}.${password}`)

    if (pizzaOrder) {
      return navigate(routes.checkout)
    } else {
      return navigate(routes.pizzaSize)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={handleLogin}
        />
        <label htmlFor="pass">Senha</label>
        <input
          type="password"
          name="pass"
          id="pass"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}
