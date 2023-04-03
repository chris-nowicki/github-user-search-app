export default function UserRepoFollowerCount({
  name,
  data,
}: {
  name: string
  data: number
}) {
  return (
    <div className='flex flex-col sm:items-center md:items-start'>
      <span className='sm:text-[11px] md:text-[13px] text-blue-200 dark:text-white-100'>{name}</span>
      <span className='text-blue-500 dark:text-white-100 sm:text-[16px] sm:font-bold md:text-[22px]'>
        {data}
      </span>
    </div>
  )
}
