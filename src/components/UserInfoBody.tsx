import { useContext } from 'react'

// Context
import { DataContext } from '../contexts/DataContext'

// Icons
import { Location, Twitter, Website, Company } from './Icons'

export default function UserInfoBody() {
  const { userData } = useContext(DataContext)

  return (
    <div className='flex w-full flex-col'>
      <p
        className={`mt-5 text-blue-200 dark:text-white-100 ${
          !userData.bio && 'text-opacity-75'
        }`}
      >
        {userData.bio ? userData.bio : 'This profile has no bio'}
      </p>
      <div className='mt-8 flex h-[85px] w-full justify-between rounded-[10px] bg-white-300 pb-[17px] pl-8 pr-[83px] pt-[15px] dark:bg-blue-600'>
        {/* repos */}
        <div className='flex flex-col'>
          <h4>Repos</h4>
          <h2 className='text-blue-500 dark:text-white-100'>
            {userData.public_repos}
          </h2>
        </div>
        {/* following */}
        <div className='flex flex-col'>
          <h4>Followers</h4>
          <h2 className='text-blue-500 dark:text-white-100'>
            {userData.followers}
          </h2>
        </div>
        {/* following */}
        <div className='flex flex-col'>
          <h4>Following</h4>
          <h2 className='text-blue-500 dark:text-white-100'>
            {userData.following}
          </h2>
        </div>
      </div>
      <div className='mt-[39px] flex text-blue-200 dark:text-white-100'>
        <div className='flex w-1/2 flex-col'>
          <div
            className={`flex items-center gap-[19.12px] ${
              !userData.location && 'opacity-50'
            }`}
          >
            <Location />
            {userData.location ? userData.location : 'Not Available'}
          </div>
          <div
            className={`mt-[21px] flex items-center gap-[16px] ${
              !userData.blog && 'opacity-50'
            }`}
          >
            <Website />
            {userData.blog ? (
              <a href={`https://${userData.blog}`} target='_blank'>
                {userData.blog}
              </a>
            ) : (
              'Not Available'
            )}
          </div>
        </div>
        <div className='ml-[33px] flex flex-col '>
          <div
            className={`flex items-center gap-[16px] ${
              !userData.twitter_username && 'opacity-50'
            }`}
          >
            <Twitter />
            <a
              href={`https://www.twitter.com/${userData.twitter_username}`}
              target='_blank'
              className='h'
            >
              {userData.twitter_username}
            </a>
            {!userData.twitter_username && 'Not Available'}
          </div>
          <div
            className={`mt-[17.15px] flex items-center gap-[16px]  ${
              !userData.company && 'opacity-50'
            }`}
          >
            <Company />
            <a
              href={`https://github.com/${userData.company.slice(1)}`}
              target='_blank'
            >
              {userData.company}
            </a>
            {!userData.company && 'Not Available'}
          </div>
        </div>
      </div>
    </div>
  )
}
