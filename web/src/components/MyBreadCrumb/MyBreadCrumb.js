import { Link } from '@redwoodjs/router'

const MyBreadCrumb = (props) => {
  const { dataBase, stateName, myRoutes } = props

  return (
    <nav>
      <ul className=" flex">
        <li>
          <Link to="/">Home/</Link>
        </li>
        <li className="ml-1 capitalize">
          <Link to={myRoutes}>{dataBase}/</Link>
        </li>
        <li className="ml-1 capitalize">{stateName}</li>
      </ul>
    </nav>
  )
}

export default MyBreadCrumb
