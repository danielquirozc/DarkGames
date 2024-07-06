import { useContext } from 'react'
import { useFetch } from '../hooks/useFetch.js'
import { useFilter } from '../hooks/useFilter'
import { CategoryContext } from '../context/Category.jsx'
import GameItem from './GameItem'

const ListOfGames = () => {
  const { filter } = useFilter()
  const { data } = useFetch()
  const { category } = useContext(CategoryContext)

  return (
    <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 *:rounded *:overflow-hidden text-slate-200 *:bg-zinc-800">
      {
        data ? data.slice(0).filter((game) => game.title.toLowerCase().includes(filter) && game.type.toLowerCase() === category.toLowerCase()).map((game) => <GameItem key={game.id} game={game} />) : 'Cargando...'
      }
    </div>
  )
}

export default ListOfGames
