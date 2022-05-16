import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import Details from 'src/components/Details/Details'

const DetailsPage = ({ id, dataBase }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/${dataBase}/${id}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [id, dataBase])

  console.log(state)

  return (
    <>
      <MetaTags title="Details" description="Details page" />

      <Details data={state} />
    </>
  )
}

export default DetailsPage
