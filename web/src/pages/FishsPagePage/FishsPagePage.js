/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'
import SearchBar from 'src/components/SearchBar/SearchBar'

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
  let nameTranslate = ''

  const onSubmit = (data) => {
    myArray.map((item) => {
      if (data.fishname === item.fr) {
        nameTranslate = item.en
      } else {
        console.log('plop...')
      }
    })
    fetch(`https://acnhapi.com/v1/fish/${nameTranslate}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }

  console.log(state.id)
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
      />
      {state.id ? (
        <div className="border p-2 m-2 shadow w-48">
          <Link to={routes.details({ id: state.id })}>
            <div className="flex justify-between items-center">
              <p>{state.name['name-EUfr']}</p>
              <p className="text-xs">#{state.id}</p>
            </div>
            <img src={state.icon_uri} alt={state.name['name-EUfr']} />
            <p className="text-center mb-2">{state.price} $</p>
            <div className="flex justify-between">
              <p className="w-1/3 flex justify-center px-1 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                {state.availability.location}
              </p>
              <p className=" flex justify-center px-1 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                {state.availability.rarity}
              </p>
            </div>
          </Link>
        </div>
      ) : null}
      <CardsDisplayer cardsDatas={stateAll} />
    </>
  )
}

export default FishsPagePage
