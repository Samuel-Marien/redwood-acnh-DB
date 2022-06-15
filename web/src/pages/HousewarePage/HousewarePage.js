/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'
import SearchBar from 'src/components/SearchBar/SearchBar'
import ItemThumbnail from 'src/components/ItemThumbnail/ItemThumbnail'

const HousewarePage = () => {
  const [state, setState] = useState([])
  const [stateAll, setStateAll] = useState({})

  const myArray = []

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/houseware/`)
      .then((response) => response.json())
      .then((json) => setStateAll(json))
  }, [])

  useEffect(() => {
    try {
      for (let item of Object.getOwnPropertyNames(stateAll)) {
        const itemName = stateAll[item]
        myArray.push({
          fr: itemName[0].name['name-EUfr'],
          en: item,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }, [myArray, stateAll])

  const onSubmit = (data) => {
    let nameTranslate = ''
    try {
      myArray.map((item) => {
        if (data.username.toUpperCase() === item.fr.toUpperCase()) {
          nameTranslate = item.en
          fetch(`https://acnhapi.com/v1/houseware/${nameTranslate}`)
            .then((response) => response.json())
            .then((json) => setState(json[0]))
        } else {
          console.log('Searching for match...')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(state)
  // console.log(stateAll)
  return (
    <>
      <MetaTags title="Houseware" description="Houseware page" />

      <SearchBar
        name="username"
        placeholder="Houseware name..."
        onSubmit={onSubmit}
        onClick={() => setState([])}
        state={state}
        ressourcesName="Houseware"
        dataBase="houseware"
      />
      {state['internal-id'] ? (
        <div className="flex justify-center my-2">
          <ItemThumbnail
            state={state}
            myRoutes={routes.details({
              id: state['internal-id'],
              dataBase: 'houseware',
            })}
          />
        </div>
      ) : null}
      <CardsDisplayer cardsDatas={stateAll} dataBase="houseware" />
    </>
  )
}

export default HousewarePage
