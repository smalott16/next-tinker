import { useState} from 'react'

interface UserData {
  email: string
} 

// This hook is intended to mimic an call to return some user data
const useDefaultData = () => {
  const fetchData = () => ({email: "me@me.com"})  
return fetchData
}

export default useDefaultData