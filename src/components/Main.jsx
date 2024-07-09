import Form from './Form.jsx'
import ListOfGames from './ListOfGames.jsx'
import { IoMenu } from 'react-icons/io5'
import { CategoryContext } from '../context/Category.jsx'
import { useContext } from 'react'

const Main = ({ toggleSidebar }) => {
  const { category } = useContext(CategoryContext)
  return (
    <main className="font-inter p-3 lg:p-7 w-full overflow-y-scroll h-screen">
      <header className="flex items-center gap-2 h-12 lg:h-12 w-full">
        <button onClick={toggleSidebar} className='flex lg:hidden justify-center items-center text-xl w-[15%] text-slate-300 bg-zinc-700/75 h-full px-2 rounded-md'><IoMenu className='text-3xl'/></button>
        <Form />
        <a
          className="bg-blue-600 min-w-[50px] p-2 text-center rounded-md text-white w-[15%] h-full font-bold place-content-center hover:bg-blue-700"
          href="https://discord.gg/hb6a6YYWUv"
          target="_blank" rel="noreferrer"
        >
          <span className='lg:text-base text-sm'>Discord</span>
        </a>
      </header>
      <section className="relative flex justify-center items-center w-full h-[250px] overflow-hidden mt-4 rounded-md">
        <img
          className="w-full h-full object-cover absolute -z-10 brightness-[0.5]"
          src="./banner.jpg"
          alt="Banner de Dark Games"
        />
        <h1 className="text-4xl lg:text-4xl font-bold text-slate-100">
          <span className="text-red-500">Dark</span>Games
        </h1>
      </section>
      <h1 className="ml-5 text-3xl lg:text-4xl font-bold text-slate-100 my-5">
        {category === 'Normal' ? 'Juegos' : 'Juegos +18'}
      </h1>
      <ListOfGames />
    </main>
  )
}

export default Main
