import Header from './components/Header'
import Search from './components/Search'
import UserInfo from './components/UserInfo/UserInfo'

function App() {
  return (
    <div className='mx-auto mt-36 flex flex-col justify-center sm:w-[327px] md:w-[573px] lg:w-[730px]'>
      <Header />
      <Search />
      <UserInfo />
    </div>
  )
}

export default App
