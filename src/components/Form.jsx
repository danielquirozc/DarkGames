import { IoSearchOutline } from 'react-icons/io5'
import { useFilter } from '../hooks/useFilter.js'

const Form = () => {
  const { handleFilter } = useFilter()

  return (
    <form className="relative cursor-text rounded-md w-full h-full text-slate-100">
      <input id="search" className="bg-zinc-800 px-3 w-full h-full rounded-md focus:outline-none" type="text" onChange={handleFilter} />
      <label htmlFor="search">
        <IoSearchOutline className="cursor-text text-2xl absolute right-3 top-1/2 -translate-y-1/2" />
      </label>
    </form>
  )
}

export default Form
