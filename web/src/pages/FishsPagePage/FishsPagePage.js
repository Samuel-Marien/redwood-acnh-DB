/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState, useEffect } from 'react'
import CardsDisplayer from 'src/components/CardsDisplayer/CardsDisplayer'

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
        const fishName = stateAll[item]
        myArray.push({
          fr: fishName.name['name-EUfr'],
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

      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="fishname"
          placeholder="Fish Name"
          validation={{ required: true }}
        />
        {state.id ? (
          <div>
            <Link to={routes.details({ id: state.id })}>
              <Submit className="text-sm border p-1 shadow hover:shadow-none">
                See details
              </Submit>
            </Link>
            <Link to={routes.fishsPage()}>
              <button
                onClick={() => setState([])}
                className="text-sm border p-1 shadow hover:shadow-none"
              >
                Reset
              </button>
            </Link>
          </div>
        ) : null}
        {state.id ? (
          <Link to={routes.details({ id: state.id })}>
            <div className="border p-2 m-2 shadow w-48">
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
            </div>
          </Link>
        ) : null}
      </Form>
      <CardsDisplayer cardsDatas={stateAll} />
    </>
  )
}

export default FishsPagePage
