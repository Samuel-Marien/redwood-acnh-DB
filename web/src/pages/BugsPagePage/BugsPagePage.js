import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BugsPagePage = () => {
  return (
    <>
      <MetaTags title="BugsPage" description="BugsPage page" />

      <h1>BugsPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/BugsPagePage/BugsPagePage.js</code>
      </p>
      <p>
        My default route is named <code>bugsPage</code>, link to me with `
        <Link to={routes.bugsPage()}>BugsPage</Link>`
      </p>
    </>
  )
}

export default BugsPagePage
