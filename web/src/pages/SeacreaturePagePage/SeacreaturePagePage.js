import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SeacreaturePagePage = () => {
  return (
    <>
      <MetaTags title="SeacreaturePage" description="SeacreaturePage page" />

      <h1>SeacreaturePagePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SeacreaturePagePage/SeacreaturePagePage.js</code>
      </p>
      <p>
        My default route is named <code>seacreaturePage</code>, link to me with
        `<Link to={routes.seacreaturePage()}>SeacreaturePage</Link>`
      </p>
    </>
  )
}

export default SeacreaturePagePage
