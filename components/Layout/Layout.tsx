 import { useContext, createContext } from 'react'
import useAuth from '../../hooks/useAuth'
interface LayoutProps {
  children: React.ReactNode
}

interface ListProps {
  data: React.ReactNode[]
}

interface AuthContextProps {
  authStatus: boolean,
  login: () => void,
  logout: () => void
}
const AuthContext = createContext({} as AuthContextProps)

const AuthButton = () => {
  const { authStatus, login, logout } = useContext(AuthContext)
  const handleClick = () => {
    if (authStatus) {
      logout()
      return
    }
    login()
  }
  return(
    <button onClick={handleClick}>Change Auth status</button>
  )
}

const List = ( { data } : ListProps) => {
  return(
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
const Layout = ({children}: LayoutProps) => {
  const { authStatus, login, logout} = useAuth()
  
  return(
    <>
      <div>Header: {authStatus ? 'logged in' : 'logged out'}</div>
      <AuthContext.Provider value={{authStatus, login, logout}} >
      <List data={[<AuthButton />]} />
      </AuthContext.Provider>
        {children}
      <div>Footer</div>
    </>
  )
}

export default Layout