/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'
import SearchBar from 'src/components/SearchBar/SearchBar'
import Thumbnail from 'src/components/Thumbnail/Thumbnail'

const VillagersPage = () => {
  const [state, setState] = useState([])
  const [stateAll, setStateAll] = useState({})

  const myArray = []

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/villagers/`)
      .then((response) => response.json())
      .then((json) => setStateAll(json))
  }, [])

  useEffect(() => {
    try {
      for (let item of Object.getOwnPropertyNames(stateAll)) {
        const itemName = stateAll[item]
        myArray.push({
          fr: itemName.name['name-EUfr'],
          en: item,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }, [myArray, stateAll])

  const onSubmit = (data) => {
    let nameTranslate = ''
    myArray.map((item) => {
      if (data.username === item.fr) {
        nameTranslate = item.en
      } else {
        console.log('plop...')
      }
    })
    fetch(`https://acnhapi.com/v1/villagers/${nameTranslate}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }

  console.log(stateAll)

  return (
    <>
      <MetaTags title="Villagers" description="Villagers page" />

      <SearchBar
        name="username"
        placeholder="Villagers name..."
        onSubmit={onSubmit}
        onClick={() => setState([])}
        state={state}
        ressourcesName="Villagers"
        dataBase="villagers"
      />
      {state.id ? (
        <div className="flex justify-center my-2">
          <Thumbnail
            state={state}
            myRoutes={routes.details({ id: state.id, dataBase: 'villagers' })}
          />
        </div>
      ) : null}
      <CardsDisplayer cardsDatas={stateAll} dataBase="villagers" />
    </>
  )
}

export default VillagersPage
