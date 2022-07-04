import { Link } from '@redwoodjs/router'

const MyBreadCrumb = (props) => {
  const { dataBase, stateName, myRoutes } = props

  return (
    <div>
      <div className="mb-2 font-inika lg:w-6/12 w-10/12 mx-auto text-xl text-myYellow-100">
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
      </div>
    </div>
  )
}

export default MyBreadCrumb
