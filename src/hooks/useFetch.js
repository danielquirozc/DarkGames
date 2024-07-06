import { useEffect, useState } from 'react'
const API_URL = 'https://darkgames-backend-production.up.railway.app/api/games'

export const useFetch = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const fetchGameById = async (id) => {
    const data = await fetch(API_URL)
    const json = await data.json()
    return json.find(game => game.id === Number(id))
  }

  return {
    data,
    fetchGameById
  }
}
