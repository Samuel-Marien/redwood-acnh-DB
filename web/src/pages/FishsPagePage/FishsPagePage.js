/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'
import SearchBar from 'src/components/SearchBar/SearchBar'
import Thumbnail from 'src/components/Thumbnail/Thumbnail'

const FishsPagePage = () => {
  const [state, setState] = useState([])
  const [stateAll, setStateAll] = useState({})

  const myArray = []

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/fish/`)
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

  // console.log(stateAll)

  const onSubmit = (data) => {
    // console.log(myArray)
    let nameTranslate = ''
    myArray.map((item) => {
      if (data.fishname === item.fr) {
        // console.log('match! Fish :)')
        nameTranslate = item.en
      } else {
        console.log('Searching for match...')
      }
    })
    fetch(`https://acnhapi.com/v1/fish/${nameTranslate}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }

  // console.log(state.id)
  return (
    <>
      <MetaTags title="FishsPage" description="FishsPage page" />
      <SearchBar
        name="fishname"
        placeholder="Fish name..."
        onSubmit={onSubmit}
        onClick={() => setState([])}
        state={state}
        ressourcesName="Fishs"
        dataBase="fish"
      />
      {state.id ? (
        <div className="flex justify-center my-2">
          <Thumbnail
            state={state}
            myRoutes={routes.details({ id: state.id, dataBase: 'fish' })}
          />
        </div>
      ) : null}
      <CardsDisplayer cardsDatas={stateAll} dataBase="fish" />
    </>
  )
}

export default FishsPagePage
