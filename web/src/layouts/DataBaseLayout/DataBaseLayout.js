import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import {
  RiLoginCircleFill,
  // RiSunFill,
  // RiMoonFill,
  RiLogoutCircleRLine,
} from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import {
  GiFlatfish,
  GiSeahorse,
  GiSpottedBug,
  GiBearFace,
  GiLoveSong,
  GiPaintBrush,
  GiFamilyHouse,
  GiCubes,
  GiStoneWall,
  GiZigzagLeaf,
  GiSecretBook,
  GiDatabase,
} from 'react-icons/gi'
import { SiTinyletter } from 'react-icons/si'

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
        name="Contact"
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

const DataBaseLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [show, setShow] = useState(false)
  console.log(currentUser)

  return (
    <div className="h-screen flex flex-col justify-between">
      <header className="">
        <nav className="px-2 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between bg-myBrown-100">
          {/* Logo & button & logged username here :  */}
          <div className="flex justify-between w-full lg:w-auto">
            <Link to={routes.home()}>
              <div className="flex items-center text-myBrown-200 mr-6">
                <div className="border-2 border-myGreen-200 shadow-lg p-1 rounded-xl bg-myYellow-200">
                  <span className="text md:text-4xl">
                    <GiZigzagLeaf color={'#786951'} />
                  </span>
                </div>
                <p className="font-inika text-4xl ml-2  subpixel-antialiased font-black tracking-tight">
                  ACNH <span className=" text-myGreen-100">DB</span>
                </p>
              </div>
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center mt-3">
                <span className="text-myBrown-200 capitalize text-sm">
                  Hi, {currentUser.name} 🐻
                </span>
              </div>
            ) : null}
            <button className="lg:hidden btn btn-square btn-ghost text-myYellow-200">
              <HiOutlineMenu
                size={35}
                onClick={() => (show ? setShow(false) : setShow(true))}
                className=""
              />
            </button>
          </div>

          {/* NavBlock & login here :  */}
          <div className="lg:flex hidden">
            {isAuthenticated ? <NavBlock /> : null}

            {isAuthenticated ? (
              <MyNavBlockLink
                onClick={logOut}
                name="Logout"
                icon={<RiLogoutCircleRLine />}
                myRoutes={routes.home()}
              />
            ) : (
              <MyNavBlockLink
                name="Login"
                icon={<RiLoginCircleFill />}
                myRoutes={routes.login()}
              />
            )}
          </div>
        </nav>

        {/* responsive NavBar here :  */}
        {isAuthenticated ? (
          <div className="lg:hidden">
            {show ? (
              <nav className="">
                <ul>
                  <MyTinyLink
                    name="Blog"
                    icon={<GiSecretBook />}
                    myRoutes={routes.blog()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />

                  <MyTinyLink
                    name="Contact"
                    icon={<SiTinyletter />}
                    myRoutes={routes.contact()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />

                  {isAuthenticated ? (
                    <MyTinyLink
                      name="Logout"
                      icon={<RiLogoutCircleRLine />}
                      onClick={logOut}
                      myRoutes={routes.home()}
                    />
                  ) : (
                    <MyTinyLink
                      name="Login"
                      icon={<RiLoginCircleFill />}
                      myRoutes={routes.login()}
                    />
                  )}
                  <p className="font-bold uppercase font-inika text-lg flex justify-center text-myBrown-100 py-1 bg-myBlue-200">
                    DataBase
                  </p>
                  <MyTinyLink
                    name="Fish"
                    icon={<GiFlatfish />}
                    myRoutes={routes.fishsPage()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Sea creat."
                    icon={<GiSeahorse />}
                    myRoutes={routes.seaCreatures()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Bugs"
                    icon={<GiSpottedBug />}
                    myRoutes={routes.bugs()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Villagers"
                    icon={<GiBearFace />}
                    myRoutes={routes.villagers()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Songs"
                    icon={<GiLoveSong />}
                    myRoutes={routes.songs()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Arts"
                    icon={<GiPaintBrush />}
                    myRoutes={routes.arts()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="House"
                    icon={<GiFamilyHouse />}
                    myRoutes={routes.houseware()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                  <MyTinyLink
                    name="Paper"
                    icon={<GiStoneWall />}
                    myRoutes={routes.papers()}
                    onClick={() => (show ? setShow(false) : setShow(true))}
                  />
                </ul>
              </nav>
            ) : null}
          </div>
        ) : null}

        {/* Nav bar here :  */}
        {isAuthenticated ? (
          <div className="lg:flex justify-center hidden bg-myYellow-100">
            <div className="flex ">
              <MyLink
                name="Fish"
                icon={<GiFlatfish />}
                myRoutes={routes.fishsPage()}
              />
              <MyLink
                name="Sea creat."
                icon={<GiSeahorse />}
                myRoutes={routes.seaCreatures()}
              />
              <MyLink
                name="Bugs"
                icon={<GiSpottedBug />}
                myRoutes={routes.bugs()}
              />
              <MyLink
                name="Villagers"
                icon={<GiBearFace />}
                myRoutes={routes.villagers()}
              />
              <MyLink
                name="Songs"
                icon={<GiLoveSong />}
                myRoutes={routes.songs()}
              />
              <MyLink
                name="Arts"
                icon={<GiPaintBrush />}
                myRoutes={routes.arts()}
              />
              <MyLink
                name="House"
                icon={<GiFamilyHouse />}
                myRoutes={routes.houseware()}
              />
              <MyLink
                name="Paper"
                icon={<GiStoneWall />}
                myRoutes={routes.papers()}
              />
              <MyLink name="Misc" icon={<GiCubes />} myRoutes={routes.misc()} />
            </div>
          </div>
        ) : null}
      </header>

      {/* Children here :  */}
      <main className="h-full">{children}</main>
    </div>
  )
}

export default DataBaseLayout
