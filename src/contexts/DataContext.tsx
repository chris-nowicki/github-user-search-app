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
})

export function DataProvider({ children }: { children: JSX.Element }) {
  const [userData, setUserData] = useState(defaultData)

  const handleSearch = (e: FormEvent, userName: string | undefined) => {
    e.preventDefault()

    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => {
        console.log(res.data)
        setUserData(res.data)
      })
      .catch((err) => console.log(err))
  }

  const value: DataContextTypes = useMemo(
    () => ({
      userData,
      setUserData,
      handleSearch,
    }),
    [userData]
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
