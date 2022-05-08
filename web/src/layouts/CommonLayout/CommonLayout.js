import { Link, routes } from '@redwoodjs/router'

const CommonLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Acnh DB</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>home</Link>
            </li>
            <li>
              <Link to={routes.fishsPage()}>fishs page</Link>
            </li>
            <li>
              <Link to={routes.seacreaturePage()}>Sea creature Page</Link>
            </li>
            <li>
              <Link to={routes.bugsPage()}>Bugs Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default CommonLayout
