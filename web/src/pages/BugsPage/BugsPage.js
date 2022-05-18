import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BugsPage = () => {
  return (
    <>
      <MetaTags title="Bugs" description="Bugs page" />

      <h1>BugsPage</h1>
      <p>
        Find me in <code>./web/src/pages/BugsPage/BugsPage.js</code>
      </p>
      <p>
        My default route is named <code>bugs</code>, link to me with `
        <Link to={routes.bugs()}>Bugs</Link>`
      </p>
    </>
  )
}

export default BugsPage
