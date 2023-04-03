import { FormEvent } from 'react'

export interface DataContextTypes {
  userData: any
  setUserData: (data: any) => void
  handleSearch: (e: FormEvent, userName: string | undefined) => void
  error: boolean | null
  setError: (error: boolean) => void
}

export interface UserData {
  name: string
  login: string
  avatar_url: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  location: string | null
  twitter_username: string | null
  blog: string | null
  company: string | null
  created_at: string
}
