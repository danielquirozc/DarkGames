import { IoGameController, IoWarning, IoClose, IoHeart } from 'react-icons/io5'
import { CategoryContext } from '../context/Category'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { setGameCategory } = useContext(CategoryContext)

  const toogleClass = (event) => {
    const options = document.querySelectorAll('.category')

    options.forEach((option) => {
      option.classList.remove('active')
    })

    const target = event.currentTarget
    target.classList.add('active')
    const category = target.textContent === 'Juegos' ? 'Normal' : '+18'
    setGameCategory(category)
  }

  return (
    <section
      style={{ left: isOpen ? '0px' : '-100%' }}
      className="h-dvh bg-zinc-700/50 left-10 lg:left-0 lg:rounded-none z-10 fixed lg:relative duration-300 overflow-hidden min-w-[110px] group flex flex-col justify-center w-full lg:w-1/5 font-inter"
    >
      <div className="relative ml-10 w-1/2 lg:w-full rounded-3xl pt-5 bg-zinc-900/95 backdrop-blur-sm lg:border-r lg:border-zinc-700 h-[90dvh] lg:bg-zinc-900 lg:h-dvh lg:rounded-none lg:ml-0">
        <div
          onClick={toggleSidebar}
          className="flex cursor-pointer lg:hidden mx-3 items-center font-bold text-center w-full mb-10 text-slate-400"
        >
          <IoClose className="text-4xl" />
          <h1 className="text-xl">Cerrar</h1>
        </div>
        <div className="flex items-center justify-center w-full gap-4">
          <img
            className="lg:w-14 lg:h-14 w-28 h-26 rounded-xl"
            src="/logo.png"
            alt="Logo de Dark Games"
          />
          <h1 className="text-slate-300 hidden xl:block font-bold text-2xl">
            <span className="text-red-500">Dark</span>
            Games
          </h1>
        </div>
        <ul
          className="flex flex-col mx-3 items-center mt-16 text-zinc-500 *:cursor-pointer
         *:rounded-md *:text-3xl lg:*:text-lg *:font-medium gap-3 *:flex *:flex-row lg:*:w-[60%] *:select-none"
        >
          <li className="active category cursor-pointer" onClick={toogleClass}>
            <Link to="/" className="flex items-center gap-2">
              <IoGameController className="text-5xl lg:text-2xl" />
              <h2 className="block">Juegos</h2>
            </Link>
          </li>

          <li className="cursor-pointer category" onClick={toogleClass}>
            <Link to="/" className="flex items-center gap-2">
              <IoWarning className="text-5xl lg:text-2xl" />
              <h2 className="block">Juegos +18</h2>
            </Link>
          </li>

          <li className="cursor-pointer">
            <a
              href="https://www.paypal.com/paypalme/darkgames6"
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <IoHeart className="text-5xl lg:text-2xl" />
              <h2>Donar</h2>
            </a>
          </li>
        </ul>
        <footer className="flex w-full absolute bottom-10 flex-col items-center text-center mt-16 text-zinc-500 font-medium">
          <h4 className="text-2xl lg:text-sm">
            © {new Date().getFullYear()} Dark Games
          </h4>
          <p className="text-xs text-balance hidden lg:block">
            Ningún archivo de descarga se encuentra alojado en nuestros
            servidores.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Sidebar
