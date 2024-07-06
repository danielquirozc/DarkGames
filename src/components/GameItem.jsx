import { Link } from 'react-router-dom'

const GameItem = ({ game }) => {
  const { id, title, images, size } = game
  return (
    <Link
      to={`/game/${id}`}
      className="flex relative flex-col max-w-[300px] min-w-[300px] lg:max-w-[250px] lg:min-w-[250px] cursor-pointer group"
    >
      <img
        className="rounded min-h-32 max-h-32 group-hover:brightness-50 duration-300"
        src={images[0]}
        alt={title}
      />
      <h1 className="my-3 ml-3 text-lg font-semibold lg:text-sm">{title}</h1>
      <span className="absolute group-hover:opacity-100 opacity-0 right-3 top-3 text-xs text-zinc-500 font-medium bg-zinc-900 px-2 py-1 rounded duration-300">
        {size}
      </span>
    </Link>
  )
}

export default GameItem
