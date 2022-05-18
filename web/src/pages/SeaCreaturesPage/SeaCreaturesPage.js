import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SeaCreaturesPage = () => {
  return (
    <>
      <MetaTags title="SeaCreatures" description="SeaCreatures page" />

      <h1>SeaCreaturesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SeaCreaturesPage/SeaCreaturesPage.js</code>
      </p>
      <p>
        My default route is named <code>seaCreatures</code>, link to me with `
        <Link to={routes.seaCreatures()}>SeaCreatures</Link>`
      </p>
    </>
  )
}

export default SeaCreaturesPage
