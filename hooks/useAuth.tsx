import { useState } from 'react'

const useAuth = () => {
  const [authStatus, setAuthStatus] = useState(false)

  const login =() => {
    setAuthStatus(true)
  }

  const logout = () => {
    setAuthStatus(false)
  }

  return { authStatus, login, logout }
}
export default useAuth