import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Slider } from '../components/Slider'
import { useEffect, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

const GamePage = () => {
  const { id } = useParams()
  const [game, setGame] = useState()
  const { fetchGameById } = useFetch()

  useEffect(() => {
    const fetchGame = async () => {
      const data = await fetchGameById(id)
      setGame(data)
    }
    fetchGame()
  }, [])

  return (
    <div className="h-screen text-slate-200 overflow-y-scroll mt-5 px-4 text-2xl font-inter w-full">
      {game && (
        <>
          <div className="lg:flex justify-start">
            <Link
              to={'..'}
              className="bg-zinc-200 lg:hidden w-16 rounded-md place-content-center">
              <IoChevronBackOutline className="text-4xl my-3 text-slate-500" />
            </Link>
            <img
              className="rounded w-24 mx-2 h-24"
              src={game.images[0]}
              alt={game.title}
            />
            <div className="my-3 *:mx-1">
              <h1 className="font-bold text-4xl lg:text-2xl">{game.title}</h1>
              <span className="text-sm lg:text-xs text-slate-500 font-semibold bg-zinc-800 px-3 p-1 rounded-full">
                {game.size}
              </span>
              {game.links.map((link, index) => (
                <span
                  key={index}
                  className="text-sm lg:text-xs text-slate-500 font-semibold bg-zinc-800 px-3 p-1 rounded-full"
                >
                  {link.nombre}
                </span>
              ))}
              <span className="text-sm lg:text-xs text-slate-500 font-semibold bg-zinc-800 px-3 p-1 rounded-full">
                {game.type.slice(0, 1).toUpperCase() + game.type.slice(1)}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center my-5 gap-5 w-full">
            <Slider images={game.images.slice(1)} />
            <div className="flex flex-col">
              <h1 className="text-slate-300 text-2xl lg:text-2xl text-center font-bold">
                Descripción:
              </h1>
              <p className="text-slate-400 text-balance text-xl lg:text-base">
                {game.description}
              </p>
              <div className="my-10 gap-2 flex justify-center flex-col">
                <h1 className="text-slate-300 text-center text-2xl lg:text-2xl font-bold">
                  Links De Descargas:
                </h1>
                {game.links.map((link, index) => (
                  <a
                    className="text-slate-300 text-center py-2 text-xl lg:text-lg lg:py-1 px-3 rounded font-semibold bg-red-500 mx-2"
                    href={link.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.nombre}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default GamePage
