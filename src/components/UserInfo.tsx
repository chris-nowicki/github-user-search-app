import { useContext } from 'react'

// Context
import { DataContext } from '../contexts/DataContext'

// Components
import UserInfoBody from './UserInfoBody'

// Helpers
import { dateJoined } from '../helpers/date'

export default function UserInfo() {
  const { userData } = useContext(DataContext)

  return (
    <div className='boxShadow mt-6 flex w-full flex-col rounded-[15px] bg-white-200 p-12 dark:bg-blue-400'>
      <div className='flex w-full gap-[37px] '>
        {/* avatar */}
        <img
          src={userData.avatar_url}
          width='117px'
          height='117px'
          className='h-[117px] w-[117px] rounded-full'
        />
        <div className='flex w-full flex-col text-blue-300  dark:text-white-100'>
          <div className='flex w-full justify-between md:flex-col lg:flex-row'>
            {/* name and date joined */}
            <div className='flex flex-col text-blue-500 dark:text-white-100'>
              <h1>{userData.name}</h1>
              <a
                href='https://www.github.com'
                className='mt-[2px] text-blue-150'
                target='_blank'
              >
                @{userData.login}
              </a>
            </div>
            <span className='md:mt-1 lg:mt-2'>
              {`Joined ${dateJoined(`${userData.created_at}`)}`}
            </span>
          </div>
          <div className='md:hidden lg:flex lg:flex-col'>
            <UserInfoBody />
          </div>
        </div>
      </div>
      <div className='md:flex md:flex-col lg:hidden'>
        <UserInfoBody />
      </div>
    </div>
  )
}
