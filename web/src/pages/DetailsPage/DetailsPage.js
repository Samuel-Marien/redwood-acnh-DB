import { MetaTags } from '@redwoodjs/web'
import { routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'

import Details from 'src/components/Details/Details'
import VillagerDetails from 'src/components/VillagerDetails/VillagerDetails'
import SongDetails from 'src/components/SongDetails/SongDetails'
import MyBreadCrumb from 'src/components/MyBreadCrumb/MyBreadCrumb'
import ArtDetails from 'src/components/ArtDetails/ArtDetails'
import ItemDetails from 'src/components/ItemDetails/ItemDetails'

const DetailsPage = ({ id, dataBase }) => {
  const [state, setState] = useState([])
  const [breadCrumbName, setBreadCrumbName] = useState(null)

  useEffect(() => {
    fetch(`https://acnhapi.com/v1/${dataBase}/${id}`)
      .then((response) => response.json())
      .then((json) => setState(json))
  }, [id, dataBase])

  // console.log(state)
  // console.log(dataBase)
  // console.log(state)
  // console.log(dataBase)

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
        case 'art':
          return routes.arts()
        case 'houseware':
          return routes.houseware()
        case 'wallmounted':
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

  useEffect(() => {
    try {
      setBreadCrumbName(state[0].name['name-EUfr'])
    } catch (e) {
      // eslint-disable-next-line no-unused-vars
      const myError = e
    }
  }, [dataBase, state])

  return (
    <div className="bgImageFish h-full py-10">
      <MetaTags title="Details" description="Details page" />
      {/* Breadcrumn for section != items  */}
      {state.name && dataBase != 'houseware' ? (
        <div className="text-base md:text-xlmb-2 font-inika  mx-auto  text-myYellow-100 lg:w-6/12 w-10/12">
          <MyBreadCrumb
            dataBase={dataBase}
            stateName={state.name['name-EUfr']}
            myRoutes={breadCrumbRouteHelper(dataBase)}
          />
        </div>
      ) : null}
      {/* breadcrumb for items section  */}
      {(breadCrumbName && dataBase === 'houseware') ||
      dataBase === 'wallmounted' ||
      dataBase === 'misc' ? (
        <div className="text-base md:text-xlmb-2 font-inika  mx-auto  text-myYellow-100 w-10/12 xl:w-7/12 2xl:w-5/12">
          <MyBreadCrumb
            dataBase={dataBase}
            stateName={breadCrumbName}
            myRoutes={breadCrumbRouteHelper(dataBase)}
          />
        </div>
      ) : null}

      {/* Display info for sea, bugs and fishs   */}
      {dataBase === 'fish' || dataBase === 'sea' || dataBase === 'bugs' ? (
        <Details data={state} dataBase={dataBase} />
      ) : null}
      {/* Display info for villagers   */}
      {dataBase === 'villagers' ? (
        <VillagerDetails data={state} dataBase={dataBase} />
      ) : null}
      {/* Display infos for songs  */}
      {dataBase === 'songs' ? (
        <SongDetails data={state} dataBase={dataBase} />
      ) : null}
      {/* Display infos for art  */}
      {dataBase === 'art' ? (
        <ArtDetails data={state} dataBase={dataBase} />
      ) : null}
      {/* Display infos for house, wallmounted, misc  */}
      {dataBase === 'houseware' ||
      dataBase === 'wallmounted' ||
      dataBase === 'misc' ? (
        <ItemDetails data={state} dataBase={dataBase} />
      ) : null}
    </div>
  )
}

export default DetailsPage
