import { useContext } from 'react'

// Context
import { DataContext } from '../../contexts/DataContext'

// Components
import UserInfoBody from './UserInfoBody'

// Helpers
import { dateJoined } from '../../helpers/date'

export default function UserInfo() {
  const { userData } = useContext(DataContext)

  return (
    <div className='boxShadow mt-6 flex w-full flex-col rounded-[15px] bg-white-200 dark:bg-blue-400 sm:px-6 sm:pb-12 sm:pt-8  md:p-10 lg:p-12'>
      <div className='flex w-full sm:gap-[19px] md:gap-[37px] '>
        {/* avatar */}
        <img
          src={userData.avatar_url}
          width='117px'
          height='117px'
          className='rounded-full sm:h-[70px] sm:w-[70px] md:h-[117px] md:w-[117px]'
        />
        <div className='flex w-full flex-col text-blue-300  dark:text-white-100'>
          <div className='flex w-full justify-between sm:flex-col lg:flex-row'>
            {/* name and date joined */}
            <div className='flex flex-col text-blue-500 dark:text-white-100'>
              <h1 className='sm:hidden md:block'>
                {userData.name ? userData.name : userData.login}
              </h1>
              <h3 className='font-bold sm:block md:hidden'>{userData.name}</h3>
              <a
                href='https://www.github.com'
                className='mt-[2px] text-blue-150 sm:mt-0'
                target='_blank'
              >
                <span className='sm:hidden md:block'>@{userData.login}</span>
                <h4 className='sm:block md:hidden'>@{userData.login}</h4>
              </a>
            </div>
            <span className='sm:mt-[6px] sm:text-[13px] md:mt-1 md:text-[15px] lg:mt-2'>
              {`Joined ${dateJoined(`${userData.created_at}`)}`}
            </span>
          </div>
          <div className='sm:hidden lg:flex lg:flex-col'>
            <UserInfoBody />
          </div>
        </div>
      </div>
      <div className='sm:flex sm:flex-col lg:hidden'>
        <UserInfoBody />
      </div>
    </div>
  )
}
