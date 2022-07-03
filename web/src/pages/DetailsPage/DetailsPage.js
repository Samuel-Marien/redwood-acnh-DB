import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import Details from 'src/components/Details/Details'
import VillagerDetails from 'src/components/VillagerDetails/VillagerDetails'

const DetailsPage = ({ id, dataBase }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/${dataBase}/${id}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [id, dataBase])

  console.log(state)

  return (
    <div className="bgImageFish h-full py-10">
      <MetaTags title="Details" description="Details page" />

      {/* Temp breadCrumb  */}
      <div className="mb-2 font-inika lg:w-6/12 w-10/12 mx-auto">
        {state.name ? (
          <p>
            Home/{dataBase}/{state.name['name-EUfr']}
          </p>
        ) : null}
      </div>
      {/* Display info for sea, bugs and fishs items  */}
      {dataBase === 'fish' || dataBase === 'sea' || dataBase === 'bugs' ? (
        <Details data={state} dataBase={dataBase} />
      ) : null}

      {/* Display info for villagers items  */}
      {dataBase === 'villagers' ? (
        <VillagerDetails data={state} dataBase={dataBase} />
      ) : null}
    </div>
  )
}

export default DetailsPage
