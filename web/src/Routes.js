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
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
