import { useContext, useRef } from 'react'
import { SearchIcon } from './Icons'

// context
import { DataContext } from '../contexts/DataContext'

export default function Search() {
  const { handleSearch, error } = useContext(DataContext)
  const userName = useRef<HTMLInputElement | null>(null)

  return (
    <div className='boxShadow mt-9 flex w-full items-center rounded-2xl bg-white-200 py-[9.5px] dark:bg-blue-400 md:gap-6 md:pl-8'>
      <SearchIcon />
      <form
        className='flex w-full items-center justify-between'
        onSubmit={(e) => {
          handleSearch(e, userName.current?.value)
        }}
      >
        <input
          type='text'
          ref={userName}
          placeholder='Search GitHub username…'
          className='h-[25px] w-[254px] border-none bg-transparent placeholder:text-blue-200 focus:ring-transparent dark:placeholder:text-white-100 sm:text-[13px] md:text-[16px]'
        />
        <div className='flex items-center gap-6'>
          {error && (
            <span className='font-bold text-[#F74646]'>No Results</span>
          )}
          <button className='mr-[10px] h-[50px] w-[106px] rounded-[10px] bg-blue-150 text-white-100 hover:bg-blue-100'>
            <h4 className='font-bold'>Search</h4>
          </button>
        </div>
      </form>
    </div>
  )
}
