/* eslint-disable react-hooks/exhaustive-deps */
import { MetaTags } from '@redwoodjs/web'
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

  console.log(state)
  return (
    <>
      <MetaTags title="FishsPage" description="FishsPage page" />

      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="fishname"
          placeholder="Fish Name"
          validation={{ required: true }}
        />
        <Submit>Go</Submit>
      </Form>
      <CardsDisplayer cardsDatas={stateAll} />
    </>
  )
}

export default FishsPagePage
