import { useEffect, useMemo, useState } from 'react'
import { Sun, Moon } from './Icons'

export default function Header() {
  const [theme, setTheme] = useState<String>(
    localStorage.theme === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    const currentTheme = document.documentElement.classList

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        if (matches) {
          if (!currentTheme.contains('dark')) {
            setTheme('dark')
          }
        } else {
          if (currentTheme.contains('dark')) {
            setTheme('light')
          }
        }
      })

    return () => {
      window.removeEventListener('change', () => {})
    }
  }, [])

  useMemo(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <div className='flex w-full justify-between'>
      <h1 className='text-blue-400 dark:text-white-100'>devfinder</h1>
      <button
        className='flex items-center gap-4 uppercase text-blue-300 hover:text-blue-400 dark:text-white-100'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <h4>{theme === 'light' ? 'dark' : 'light'}</h4>
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </div>
  )
}
