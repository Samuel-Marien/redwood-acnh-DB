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
  const [myDevId, setMyDevId] = useState('')
  const originalName = []

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
        originalName.push(item)
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
            .then(setMyDevId(nameTranslate))
        } else {
          console.log('Searching for match...')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  state.devId = myDevId

  // console.log(myDevId)
  // console.log(state)
  console.log(stateAll)
  // console.log(originalName)

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

      {/* Display result for one card  */}
      {state['internal-id'] ? (
        <div className="flex justify-center my-2">
          <ItemThumbnail
            state={state}
            myRoutes={routes.details({
              id: state.devId,
              dataBase: 'houseware',
            })}
          />
        </div>
      ) : null}

      {/* Display all cards  */}
      <CardsDisplayer cardsDatas={stateAll} dataBase="houseware" />
    </>
  )
}

export default HousewarePage
