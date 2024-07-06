import { createContext, useState } from 'react'
import { FilterProvider } from './Filter'

export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
  const [category, setGameCategory] = useState('Normal')
  return (
    <FilterProvider>
      <CategoryContext.Provider value={{ category, setGameCategory }}>
        {children}
      </CategoryContext.Provider>
    </FilterProvider>
  )
}
