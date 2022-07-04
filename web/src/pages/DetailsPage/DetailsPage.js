import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'

import Details from 'src/components/Details/Details'
import VillagerDetails from 'src/components/VillagerDetails/VillagerDetails'
import MyBreadCrumb from 'src/components/MyBreadCrumb/MyBreadCrumb'

const DetailsPage = ({ id, dataBase }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/${dataBase}/${id}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [id, dataBase])

  // console.log(state)
  console.log(dataBase)

  const breadCrumbRouteHelper = (base) => {
    try {
      switch (base) {
        case 'villagers':
          return routes.villagers()
        case 'fish':
          return routes.fishsPage()
        case 'sea':
          return routes.seaCreatures()
        case 'bugs':
          return routes.bugs()
        case 'songs':
          return routes.songs()
        case 'arts':
          return routes.arts()
        case 'houseware':
          return routes.houseware()
        case 'papers':
          return routes.papers()
        case 'misc':
          return routes.misc()
        default:
          break
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="bgImageFish h-full py-10">
      <MetaTags title="Details" description="Details page" />

      {state.name ? (
        <MyBreadCrumb
          dataBase={dataBase}
          stateName={state.name['name-EUfr']}
          myRoutes={breadCrumbRouteHelper(dataBase)}
        />
      ) : null}

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
