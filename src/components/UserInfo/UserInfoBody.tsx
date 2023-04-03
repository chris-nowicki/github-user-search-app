import { useContext } from 'react'

// Context
import { DataContext } from '../../contexts/DataContext'

// Components
import UserRepoFollowerCount from './UserRepoFollowerCount'

// Icons
import { Location, Twitter, Website, Company } from '../Icons'

export default function UserInfoBody() {
  const { userData } = useContext(DataContext)

  const userDataCount = [
    { name: 'Repos', data: userData.public_repos },
    { name: 'Followers', data: userData.followers },
    { name: 'Following', data: userData.following },
  ]

  return (
    <div className='flex w-full flex-col'>
      <p
        className={`mt-5 text-blue-200 dark:text-white-100 sm:text-[13px] md:text-[15px] ${
          !userData.bio && 'text-opacity-75'
        }`}
      >
        {userData.bio ? userData.bio : 'This profile has no bio'}
      </p>

      {/* user repos, followers, and following count container */}
      <div className='flex h-[85px] w-full rounded-[10px] bg-white-300 pb-[17px] dark:bg-blue-600 sm:mt-6 sm:justify-between sm:px-4 sm:pt-[18px] md:mt-8 md:justify-between md:pl-8 md:pr-[83px] md:pt-[15px]'>
        {userDataCount.map((count) => (
          <UserRepoFollowerCount name={count.name} data={count.data} />
        ))}
      </div>

      {/* location, blog, twitter, company info */}
      <div className='flex text-blue-200 dark:text-white-100 sm:mt-6 sm:flex-col md:mt-[39px] md:flex-row'>
        {/* location and blog container */}
        <div className='flex flex-col sm:w-full sm:gap-4 md:w-1/2 md:gap-[21px]'>
          {/* location */}
          <div
            className={`flex items-center sm:gap-[19.25px] md:gap-[19.12px] ${
              !userData.location && 'opacity-50'
            }`}
          >
            <Location />
            {userData.location ? userData.location : 'Not Available'}
          </div>

          {/* blog */}
          <div
            className={`flex items-center sm:gap-[13.01px] md:gap-[16.01px] ${
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

        {/* twitter & company container */}
        <div className='flex flex-col sm:mt-4 sm:w-full sm:gap-4 md:ml-[33px] md:mt-0 md:w-auto md:gap-[17.15px]'>
          {/* twitter */}
          <div
            className={`flex items-center gap-[16px] ${
              !userData.twitter_username && 'opacity-50'
            }`}
          >
            <Twitter />
            <a
              href={`https://www.twitter.com/${userData.twitter_username}`}
              target='_blank'
              className={`${!userData.twitter_username && 'hidden'}`}
            >
              {userData.twitter_username}
            </a>
            {!userData.twitter_username && 'Not Available'}
          </div>

          {/* company */}
          <div
            className={`flex items-center sm:gap-[13px] md:gap-[16px]  ${
              !userData.company && 'opacity-50'
            }`}
          >
            <Company />
            {!userData.company ? (
              'Not Available'
            ) : userData.company.slice(0, 1) === '@' ? (
              <a
                href={`https://github.com/${userData.company.slice(1)}`}
                target='_blank'
                className={`${!userData.company && 'hidden'}`}
              >
                {userData.company}
              </a>
            ) : (
              userData.company
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
