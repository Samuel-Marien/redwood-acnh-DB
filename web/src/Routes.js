// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import CommonLayout from 'src/layouts/CommonLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CommonLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/bugs-page" page={BugsPagePage} name="bugsPage" />
        <Route path="/seacreature-page" page={SeacreaturePagePage} name="seacreaturePage" />
        <Route path="/fishs-page" page={FishsPagePage} name="fishsPage" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
