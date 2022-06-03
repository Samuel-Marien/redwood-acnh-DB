/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'
import SearchBar from 'src/components/SearchBar/SearchBar'
import Thumbnail from 'src/components/Thumbnail/Thumbnail'

const ArtsPage = () => {
  const [state, setState] = useState([])
  const [stateAll, setStateAll] = useState({})

  const myArray = []

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/art/`)
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
        console.log('Searching for match...')
      }
    })
    fetch(`https://acnhapi.com/v1/art/${nameTranslate}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }

  console.log(stateAll)
  return (
    <>
      <MetaTags title="Arts" description="Arts page" />

      <SearchBar
        name="username"
        placeholder="Art name..."
        onSubmit={onSubmit}
        onClick={() => setState([])}
        state={state}
        ressourcesName="Art"
        dataBase="art"
      />
      {state.id ? (
        <div className="flex justify-center my-2">
          <Thumbnail
            state={state}
            myRoutes={routes.details({ id: state.id, dataBase: 'art' })}
          />
        </div>
      ) : null}
      <CardsDisplayer cardsDatas={stateAll} dataBase="art" />
    </>
  )
}

export default ArtsPage
