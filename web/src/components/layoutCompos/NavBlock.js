import React from 'react'
import { routes } from '@redwoodjs/router'

import MyNavBlockLink from './MyNavBlockLink'

import { GiSecretBook, GiDatabase } from 'react-icons/gi'
import { SiTinyletter } from 'react-icons/si'
import { RiHome7Line } from 'react-icons/ri'

const NavBlock = () => {
  return (
    <>
      <MyNavBlockLink
        name="Blog"
        icon={<GiSecretBook />}
        myRoutes={routes.blog()}
      />
      <MyNavBlockLink
        name="DataBase"
        icon={<GiDatabase />}
        myRoutes={routes.bugs()}
      />
      <MyNavBlockLink
        name="My Island"
        icon={<RiHome7Line />}
        myRoutes={routes.login()}
      />
      <MyNavBlockLink
        name=""
        icon={<SiTinyletter />}
        myRoutes={routes.contact()}
      />

      {/* <div className="flex flex-col">
        <span className="mb-2 text-myGreen-100 hover:text-myGreen-200 cursor-pointer">
          <RiMoonFill />
        </span>
        <span className=" text-myGreen-100 hover:text-myGreen-200 cursor-pointer">
          <RiSunFill />{' '}
        </span>
      </div> */}
    </>
  )
}

export default NavBlock
