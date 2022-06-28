import React from 'react'
import { Link } from '@redwoodjs/router'

const MyLink = (props) => {
  const { myRoutes, icon, name, onClick } = props
  return (
    <Link
      onClick={onClick}
      className="flex py-2 px-3 text-myBrown-200 hover:bg-myGreen-300 cursor-pointer transition-colors duration-300 hover:animate-pulse"
      to={myRoutes}
    >
      <div className="flex items-center  ">
        <div className="text-xl text-myBrown-100 ">{icon}</div>

        <p className="ml-1 text-center text-sm font-bold">{name}</p>
      </div>
    </Link>
  )
}

export default MyLink
