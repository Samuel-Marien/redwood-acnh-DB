import React from 'react'
import { Link } from '@redwoodjs/router'

const MyTinyLink = (props) => {
  const { myRoutes, icon, name, onClick } = props
  return (
    <Link to={myRoutes} onClick={onClick}>
      <li className="flex items-center pl-2  border-b py-2 shadow bg-slate-200 hover:bg-slate-400 transition-colors duration-300">
        <span className="mr-2 text-2xl text-myBlue-100">{icon}</span>
        <span className="text-myBlue-100 ">{name}</span>
      </li>
    </Link>
  )
}

export default MyTinyLink
