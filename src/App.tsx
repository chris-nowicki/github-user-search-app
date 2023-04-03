import Header from './components/Header'
import Search from './components/Search'
import UserInfo from './components/UserInfo'

function App() {
  return (
    <div className='flex flex-col justify-center mx-auto md:w-[573px] lg:w-[730px] mt-36'>
      <Header />
      <Search />
      <UserInfo />
    </div>
  )
}

export default App
