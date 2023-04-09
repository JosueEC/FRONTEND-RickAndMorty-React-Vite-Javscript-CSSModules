import { useState, useEffect } from 'react'

export const useFetch = (BASE_URL = '', errorMessage = 'An error has ocurred getting the data') => {
  const [dataFetch, setFetchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      // Pedimos los datos a la api
      try {
        const response = await window.fetch(BASE_URL)
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        setFetchData(data.results)
      } catch (error) {
        // Si hay un error ...
        console.error(error.message)
        setError(errorMessage)
      }
      setLoading(false)
    }

    fetchData()
  }, [BASE_URL]) // Hacer enfasis en la url
  // Retornamos nuestro fetch_data como data, nuestro loading y error
  return { data: dataFetch, loading, error }
}
