import { createContext, useState, useMemo, FormEvent } from 'react'
import axios from 'axios'

// Types
import { DataContextTypes, UserData } from '../types'

// Load Default Data
const defaultData: UserData = {
  name: 'The Octocat',
  login: 'octocat',
  avatar_url: '/images/octocat.png',
  bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
  public_repos: 8,
  followers: 3938,
  following: 9,
  location: 'San Francisco',
  twitter_username: null,
  blog: 'https://github.blog',
  company: '@github',
  created_at: '2011-01-25T00:00:00Z',
}

// Create Context
export const DataContext = createContext<DataContextTypes>({
  userData: null,
  setUserData: () => null,
  handleSearch: () => null,
  error: null,
  setError: () => null,
})

export function DataProvider({ children }: { children: JSX.Element }) {
  const [userData, setUserData] = useState(defaultData)
  const [error, setError] = useState(false)

  const handleSearch = (e: FormEvent, userName: string | undefined) => {
    e.preventDefault()
    setError(false)
    
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        setUserData(res.data)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
  }

  const value: DataContextTypes = useMemo(
    () => ({
      userData,
      setUserData,
      handleSearch,
      error,
      setError,
    }),
    [userData, error]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
