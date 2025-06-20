import { usenState } from 'react'

import searchRobots from './api'
import SearchBar from './components/SearchBar'
import Robotslist from './components/Robotslist'

function app(){
  const[ robots, setRobots] = usenState([])

  const hanleSubmit = async(term) => {
    console.log('usted esta buscando con:', term)
    const result = await searchRobots(term)
    setRobots(result)
    console.log(result)
  }

  return(
    <>
      <h1>Ny Robots</h1>
      <SearchBar onSubmit={hanleSubmit} />
      <Robotslist robots={robots} />
      </>
  )
}

export default app