import { Header } from '../../components/Header/index.jsx'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.css'
export const User = () => {
  const { username } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const json = await response.json()
      setData(json)
    })()
  }, [username])

  return (
      <div className='user'>
        <Header isBack />
        <section>
          <img src={data?.avatar_url} alt='avatar_url' />
          <div className='info'>
            <h1>{data?.name}</h1>
            <span>{data?.location}</span>
          </div>
        </section>
      </div>
  )
}
