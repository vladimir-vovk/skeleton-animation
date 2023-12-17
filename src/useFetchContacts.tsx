import { useEffect, useState } from 'react'

export type ContactInfo = {
  id: number
  name: string
  email: string
  avatar: string
}

const shapeData = (data: ContactInfo[]) => {
  return data?.map(({ id, name, email }) => ({
    id,
    name,
    email,
    avatar: `https://loremflickr.com/100/100/cat?lock=${id}`
  }))
}

export const useFetchContacts = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ContactInfo[] | undefined>(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()

      /* Let's wait for 2 seconds */
      setTimeout(() => {
        setData(shapeData(json))
        setLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  return {
    loading,
    data
  }
}
