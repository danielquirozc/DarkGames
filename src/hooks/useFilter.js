import { useContext } from 'react'
import { FilterContext } from '../context/Filter'

export const useFilter = () => {
  const { filter, setFilter } = useContext(FilterContext)

  function handleFilter (e) {
    setFilter(e.target.value.toLowerCase())
  }
  return { filter, handleFilter }
}
