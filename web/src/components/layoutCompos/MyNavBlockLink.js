import React from 'react'
import { Link } from '@redwoodjs/router'

const MyNavBlockLink = (props) => {
  const { myRoutes, icon, name, onClick } = props
  return (
    <Link
      onClick={onClick}
      className="flex py-2 px-3 text-myBrown-200 cursor-pointer transition-colors duration-300 hover:animate-pulse"
      to={myRoutes}
    >
      <div className="flex items-center  ">
        <div className=" text-myBlue-300 ">{icon}</div>

        <p className="ml-1 text-center font-inika uppercase">{name}</p>
      </div>
    </Link>
  )
}

export default MyNavBlockLink
