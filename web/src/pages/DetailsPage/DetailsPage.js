import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import Details from 'src/components/Details/Details'

const DetailsPage = ({ id }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/fish/${id}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [id])

  console.log(state)

  return (
    <>
      <MetaTags title="Details" description="Details page" />

      <h1>DetailsPage</h1>

      <Details data={state} />
    </>
  )
}

export default DetailsPage
