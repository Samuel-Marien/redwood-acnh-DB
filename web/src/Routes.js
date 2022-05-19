import { Router, Route, Set } from '@redwoodjs/router'
import CommonLayout from 'src/layouts/CommonLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CommonLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/details/{id}" page={DetailsPage} name="details" />
        <Route path="/fishs-page" page={FishsPagePage} name="fishsPage" />
        <Route path="/sea-creatures" page={SeaCreaturesPage} name="seaCreatures" />
        <Route path="/bugs" page={BugsPage} name="bugs" />
        <Route path="/villagers" page={VillagersPage} name="villagers" />
        <Route path="/songs" page={SongsPage} name="songs" />
        <Route path="/arts" page={ArtsPage} name="arts" />
        <Route path="/houseware" page={HousewarePage} name="houseware" />
        <Route path="/papers" page={PapersPage} name="papers" />
        <Route path="/misc" page={MiscPage} name="misc" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
